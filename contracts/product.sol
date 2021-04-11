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

    
    function AddProduct() public OwnerReq returns (bool) //David
    {
        return true;
    }
    
    function RemoveProduct() public OwnerReq returns (bool) //Madalina
    {
        return true;
    }
    
    function UpdateProduct() public OwnerReq returns (bool) //David
    {
        return true;
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
        
        ReportedHashProducts.push(_unique_hash);
        IndexCountHash ++;
        return true;
    }
}