pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
/*
In contractul pe care-l vom face vom avea urmatoarele elemente : 
1) Structuri pentru produse
2) Functii de : adaugare, stergere, update, cautare, report.

3) 15/04/2021 Functions :
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
        string price;
        string buyer_hash;
    } 
    Product [] Logs;
    Product [] OProducts; 
    string [] ReportedHashProducts;
    
    modifier OwnerReq() {
        require(msg.sender == owner);
        _;
    }
    
    
    constructor() public { 
        
        owner = msg.sender;
    }
    
    
    
    
    /*
    Input Populare : 
    "Retro 1", "Jordan","Somalia", "432539134"
    "Retro 2", "Jordan","Somalia", "432539114"
    "Retro", "Jordan","Somalia", "432569134"
    "Kanye 2", "Yeezy","Somalia", "41239134"
    */
    
    
    function AddProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash) public OwnerReq returns (bool) //David
    {
        
        if(CompareStrings(_name, "") || CompareStrings(_brand, "") || CompareStrings(_country, "") || CompareStrings(_unique_hash, ""))
            return false;
            
        for (uint i = 0; i < OProducts.length; i++)
           if(CompareStrings(_unique_hash, OProducts[i].unique_hash))
                return UpdateProduct(OProducts[i].unique_hash,_name,_brand,_country,_unique_hash); // we update it
        
        Product memory nProduct = Product(_name,_brand,_country,_unique_hash);    
        OProducts.push(nProduct); 
        
        return true;
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
    
    function UpdateProduct(string memory old_unique_hash, string memory new_name, string memory new_brand, string memory new_country, string memory new_unique_hash) public OwnerReq returns (bool) //David
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
            return true;
            }
        }
       return false;
    }
    
    function CompareStrings(string memory _s1, string memory _s2) internal view returns(bool) {
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