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
    
    function ReturnProduct(uint _index) internal view returns (string memory, string memory, string memory) {
        return (OProducts[_index].name, OProducts[_index].brand, OProducts[_index].country);
    }
    
    function SearchProduct(string memory _name, string memory _brand, string memory _country, string memory _unique_hash) public view returns (bool) //Sorina
    {
        int found = 0;
        // pentru ce nu vrem sa introducem in parametri vom pune ""
        
        for (uint i = 0; i < IndexCountProduct - 1; i++) {
            if (_name == "") or (_name == OProducts[i].name) {
                if (_brand == "") or (_brand == OProducts[i].brand) {
                    if (_country == "") or (_country == OProducts[i].country) {
                        if (_unique_hash == "") or (_unique_hash == OProducts[i].unique_hash) {
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
        for (uint i = 0; i < IndexCountProduct - 1; i++) {
            if (_unique_hash == OProducts[i].unique_hash) {
                return false;
            }
        }
        
        ReportedHashProducts.push(_unique_hash);
        IndexCountHash ++;
        return true;
    }
}