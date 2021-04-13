pragma solidity ^0.5.0;
/*
In contractul pe care-l vom face vom avea urmatoarele elemente : 
1) Structuri pentru produse
2) Functii de : adaugare, stergere, update, cautare, report.
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
    }
    
    int IndexCountProduct = 0;
    Product [] OProducts;
    
    int IndexCountHash = 0;
    string [] ReportedHashProducts;
    
    modifier OwnerReq() {
        require(msg.sender == owner);
        _;
    }
    
    
    constructor() public {
        owner = msg.sender;
    }

    
    function AddProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash) public OwnerReq returns (bool) //David
    {
        
        if(CompareStrings(_name, " ") || CompareStrings(_brand, " ") || CompareStrings(_country, " ") || CompareStrings(_unique_hash, " "))
            return false;
            
            
        for (uint i = 0; i < OProducts.length; i++)
        {
           if(CompareStrings(_name, OProducts[i].name) || CompareStrings(_brand, OProducts[i].brand) || CompareStrings(_country, OProducts[i].country) || CompareStrings(_unique_hash, OProducts[i].unique_hash))
                return false;  //the product already exists shall we update it ? mhmm we'll see
        }
        
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
            OProducts.length--;
            IndexCountProduct--;
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
            ReportedHashProducts.length--;
            IndexCountHash--;
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
                
            if(!CompareStrings(new_name, " "))
                OProducts[i].name = new_name;
            if(!CompareStrings(new_brand, " "))
                OProducts[i].brand = new_brand;    
            if(!CompareStrings(new_country, " "))
                OProducts[i].country = new_country;
            if(!CompareStrings(new_unique_hash, " "))
                OProducts[i].unique_hash = new_unique_hash;  
                
            return true;
            }
        }
       return false;
    }
    
    function CompareStrings(string memory _s1, string memory _s2) internal view returns(bool) {
        return keccak256(abi.encodePacked(_s1)) == keccak256(abi.encodePacked(_s2));
    }
    
    function ReturnProduct(uint _index) internal view returns (string memory, string memory, string memory) {
        return (OProducts[_index].name, OProducts[_index].brand, OProducts[_index].country);
    }
    
    function SearchProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash) public view returns (bool) //Sorina
    {
        int found = 0;
        // pentru ce nu vrem sa introducem in parametri vom pune ""
        
        for (uint i = 0; i < OProducts.length - 1; i++) {
            if (CompareStrings(_name, "") || CompareStrings( _name, OProducts[i].name)) {
                if (CompareStrings(_brand, "") || CompareStrings(_brand, OProducts[i].brand)) {
                    if (CompareStrings(_country, "") || CompareStrings(_country, OProducts[i].country)) {
                        if (CompareStrings(_unique_hash, "") || CompareStrings(_unique_hash, OProducts[i].unique_hash)) {
                            ReturnProduct(i);
                            found = 1;
                        }
                    }
                }
            }
        }
        
        if (found == 0) {
            return false;
        }
        
        return true;
    }
    
    function ReportProduct(string memory _unique_hash) public returns (bool) //Sorina
    {
        for (uint i = 0; i < OProducts.length - 1; i++) {
            if (CompareStrings(_unique_hash, OProducts[i].unique_hash)) {
                return false;
            }
        }
        
        for (uint i = 0; i < ReportedHashProducts.length - 1; i++) {
            if (CompareStrings(_unique_hash, ReportedHashProducts[i])) {
                return false;
            }
        }
        
        ReportedHashProducts.push(_unique_hash);
        IndexCountHash ++;
        return true;
    }
}