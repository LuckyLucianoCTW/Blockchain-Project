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
    
    function SearchProduct() public view returns (string memory,string memory,string memory,string memory) //Sorina
    {
        return (" "," "," "," ");
    }
    
    function ReportProduct() public returns (bool) //Sorina
    {
        return true;
    }
}