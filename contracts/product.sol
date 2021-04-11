pragma solidity ^0.5.0;
/*
In contractul pe care-l vom face vom avea urmatoarele elemente : 

1) Structuri pentru produse
2) Functii de : adaugare, stergere, interschimbare, cautare, report.

*/

contract Products
{
    address owner; //doar ownerul va avea dreptul de a adauga produse
    
    struct Prduct{
        string name;
        string brand;
        string country;
        string unique_hash;
    }
    
}