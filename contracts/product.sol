pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
/*
In contractul pe care-l vom face vom avea urmatoarele elemente : 
1) Structuri pentru produse
2) Functii de : adaugare, stergere, update, cautare, report.

3) 15/04/2021 Functions :
-Search for past orders //Sorina
-BuyProduct //Sorina 
-RefundProduct //Madalina 
-OnSaleProduct //David
*/

contract Products
{
    address owner; //doar ownerul va avea dreptul de a adauga produse
    struct Product
    {
        string name;
        string brand;
        string country;
        string unique_hash;
        uint price;
        uint pieces;
    } 
    
    struct BoughtProduct
    {
        string unique_hash;
        address payable buyer_hash;
        uint numberOrder;
    }
    
    BoughtProduct [] BoughtProducts;
    Product [] OProducts; 
    string [] ReportedHashProducts;
    
    uint UniqueNumberOrders = 0;
    
    address constant public _owner_hash = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    
    modifier OwnerReq() {
        require(msg.sender == owner);
        _;
    }
    
    
    constructor() public { 
        owner = msg.sender;
    }
    
    
    /*
    Input Populare : 
    "Retro 1", "Jordan","Somalia", "432539134",699, 5
    "Retro 2", "Jordan","Somalia", "432539114",519, 1
    "Retro", "Jordan","Somalia", "432569134", 555, 3
    "Kanye 2", "Yeezy","Somalia", "41239134",899, 4
    */
    
    function OnSaleProduct(string memory search_hash, uint discount) public OwnerReq returns (bool)
    {
        for(uint i = 0 ; i < OProducts.length; i++)
            if(CompareStrings(OProducts[i].unique_hash,search_hash))
             return UpdateProduct(search_hash,"","","","", OProducts[i].price -  ((discount * OProducts[i].price) / 100),"");
        return false;
    }
    
    function AddProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash, uint price) public OwnerReq returns (bool) //David
    {
        
        if(CompareStrings(_name, "") || CompareStrings(_brand, "") || CompareStrings(_country, "") || CompareStrings(_unique_hash, "") || price < 0)
            return false;
            
        for (uint i = 0; i < OProducts.length; i++)
           if(CompareStrings(_unique_hash, OProducts[i].unique_hash))
                return UpdateProduct(OProducts[i].unique_hash,_name,_brand,_country,_unique_hash,price,""); // we update it
        
        // Product memory nProduct = Product(_name,_brand,_country,_unique_hash,price,"");    
        // OProducts.push(nProduct); 
        
        return true;
    }
    
    function RefundProduct(uint _numberOrder) public payable OwnerReq returns (bool) //Madalina
    { 
        uint indexProduct = 0;
        uint indexBought = 0;
        bool inArrayProducts = false;
        bool inArrayBought = false;
        
        //cauta produsul in BoughtProducts
        for (uint i = 0; i < BoughtProducts.length; i++) {
            if (_numberOrder == BoughtProducts[i].numberOrder)
            {
                indexBought = i;
                inArrayBought = true;
            }
        }
        
        //cauta produsul in OProducts
        for (uint i = 0; i < OProducts.length; i++) {
            if (CompareStrings(BoughtProducts[indexBought].unique_hash, OProducts[i].unique_hash)) {
                indexProduct = i;
                inArrayBought = true;
            }
        }
        
        //daca se afla in produsele spre vanzare si in lista cu produsele vandute 
        if (inArrayProducts == true && inArrayBought == true) { 
            //returnam banii
            // BoughtProducts storage b = BoughtProducts[indexBought];
            // Product storage p = Product[indexProduct];
            
            BoughtProducts[indexBought].buyer_hash.transfer(OProducts[indexProduct].price);
            
            //stergem produsul din produsele vandute
            for (uint j = indexBought; j < BoughtProducts.length - 1; j++) {
                BoughtProducts[j] = BoughtProducts[j + 1];
            }
            
            delete BoughtProducts[BoughtProducts.length - 1];
            return true;
        }
        
        
        
        return false;
    }
    
    function RemoveProduct(string memory _unique_hash) public OwnerReq returns (bool) //Madalina
    {
        uint indexRemove = 0;
        bool inArray = false;
        
        //cauta produsul in OProducts
        for (uint i = 0; i < OProducts.length; i++) {
            if (CompareStrings(_unique_hash, OProducts[i].unique_hash)) {
                indexRemove = i;
                inArray = true;
            }
        }
        
        if (inArray == true) { 
            for (uint j = indexRemove; j < OProducts.length - 1; j++) {
                OProducts[j] = OProducts[j + 1];
            }
            
            delete OProducts[OProducts.length - 1];
            return true;
        }
        
        return false;
    }
    
    function RemoveReportedProduct(string memory _unique_hash) public OwnerReq returns (bool) //Madalina
    {
        uint indexRemove = 0;
        bool inArray = false;
        
        //cauta produsul in ReportedHashProducts
        for (uint i = 0; i < ReportedHashProducts.length; i++) {
            if (CompareStrings(_unique_hash, ReportedHashProducts[i])) {
                indexRemove = i;
                inArray = true;
            }
        }
        
        if (inArray == true) { 
            for (uint j = indexRemove; j < ReportedHashProducts.length - 1; j++) {
                ReportedHashProducts[j] = ReportedHashProducts[j + 1];
            }
            
            delete ReportedHashProducts[ReportedHashProducts.length - 1];
            return true;
        }
        
        return false;
      
    }
    
    function UpdateProduct(string memory old_unique_hash, string memory new_name, string memory new_brand, string memory new_country, string memory new_unique_hash,uint new_price, string memory new_buyerHash) public OwnerReq returns (bool) //David
    {
        
        for (uint i = 0; i < OProducts.length; i++)
        {
            if(CompareStrings(old_unique_hash,OProducts[i].unique_hash))
            {
            if(!CompareStrings(new_name, ""))
                OProducts[i].name = new_name;
            if(!CompareStrings(new_brand, ""))
                OProducts[i].brand = new_brand;    
            if(!CompareStrings(new_country, ""))
                OProducts[i].country = new_country;
            if(!CompareStrings(new_unique_hash, ""))
                OProducts[i].unique_hash = new_unique_hash;  
            if(new_price != OProducts[i].price && new_price > 0)
                OProducts[i].price = new_price;  
            if(!CompareStrings(new_buyerHash, ""))
                // OProducts[i].buyer_hash = new_buyerHash;  
            return true;
            }
        }
       return false;
    }
    
    function CompareStrings(string memory _s1, string memory _s2) internal view returns(bool) 
    {
        return keccak256(abi.encodePacked(_s1)) == keccak256(abi.encodePacked(_s2));
    }
 
    function SearchReportedProducts(string memory _unique_hash) public view returns (bool) //Sorina
    {
        // pentru ce nu vrem sa introducem in parametri vom pune "" 
        for (uint i = 0; i < ReportedHashProducts.length; i++) {
            if(CompareStrings(ReportedHashProducts[i],_unique_hash))
                return true;
        }
        
        return false;
    }
    
    function SearchProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash) public view returns (bool, Product[] memory) //Sorina
    {
        Product[] memory id = new Product[](OProducts.length);  
        bool finalState = false;
        // pentru ce nu vrem sa introducem in parametri vom pune "" 
        for (uint i = 0; i < OProducts.length; i++) {
            if (CompareStrings(_name, "") || CompareStrings( _name, OProducts[i].name)) {
                if (CompareStrings(_brand, "") || CompareStrings(_brand, OProducts[i].brand)) {
                    if (CompareStrings(_country, "") || CompareStrings(_country, OProducts[i].country)) {
                        if (CompareStrings(_unique_hash, "") || CompareStrings(_unique_hash, OProducts[i].unique_hash)) {
                            
                            Product storage aux = OProducts[i]; 
                            id[i] = aux; 
                            finalState = true;
                        }
                    }
                }
            }
        }
        
        return (finalState,id);
    }
    
    function BuyProduct(string memory _unique_hash, address payable _buyer_hash) public payable returns (bool) //Sorina
    {
        // caut produsul in OProducts
        for (uint i = 0; i < OProducts.length; i++) {
            if (CompareStrings(_unique_hash, OProducts[i].unique_hash))
            {
                if (OProducts[i].pieces > 0) {
                    // scad numar de bucati 
                    OProducts[i].pieces = OProducts[i].pieces - 1;
                    
                    // incasez banii
                    address payable _owner_hash_payable = address(uint160(_owner_hash));
                    _owner_hash_payable.transfer(OProducts[i].price);

                    // adaug tranzactia in bought products
                    UniqueNumberOrders ++;
                    BoughtProduct memory nBoughtProduct = BoughtProduct(_unique_hash, _buyer_hash, UniqueNumberOrders);    
                    BoughtProducts.push(nBoughtProduct); 
                    
                    return true;
                }
            }
        }
        
        return false;
    }
    
    function SearchPastOrders(address payable _buyer_hash) public view returns (BoughtProduct[] memory) // Sorina
    { 
        BoughtProduct[] memory id = new BoughtProduct[](BoughtProducts.length);  
        for (uint i = 0; i < BoughtProducts.length; i++) {
            if (_buyer_hash == BoughtProducts[i].buyer_hash) {
                BoughtProduct storage aux = BoughtProducts[i]; 
                id[i] = aux; 
            }
        }
        
        return (id);
    }
    
    function ReportProduct(string memory _unique_hash) public returns (bool) //Sorina
    {
        for (uint i = 0; i < OProducts.length; i++) {
            if (CompareStrings(_unique_hash, OProducts[i].unique_hash)) {
                return false;
            }
        }
        
        for (uint i = 0; i < ReportedHashProducts.length; i++) {
            if (CompareStrings(_unique_hash, ReportedHashProducts[i])) {
                return false;
            }
        }
        
        ReportedHashProducts.push(_unique_hash);
        return true;
    }
    
}