export const PRODUCTS_ADDRESS = "0xcf5C9fDc4Acf74624bc62D699466481dCB2307F6";

export const PRODUCTS_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "search_hash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "discount",
        type: "uint256",
      },
    ],
    name: "OnSaleProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pieces",
        type: "uint256",
      },
    ],
    name: "AddProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_numberOrder",
        type: "uint256",
      },
    ],
    name: "RefundProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "RemoveProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "RemoveReportedProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "old_unique_hash",
        type: "string",
      },
      {
        internalType: "string",
        name: "new_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "new_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "new_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "new_unique_hash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "new_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "new_pieces",
        type: "uint256",
      },
    ],
    name: "UpdateProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "SearchReportedProducts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "SearchProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "brand",
            type: "string",
          },
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
          {
            internalType: "string",
            name: "unique_hash",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pieces",
            type: "uint256",
          },
        ],
        internalType: "struct Products.Product[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "BuyProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address payable",
        name: "_buyer_hash",
        type: "address",
      },
    ],
    name: "SearchPastOrders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "string",
            name: "unique_hash",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "buyer_hash",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "numberOrder",
            type: "uint256",
          },
        ],
        internalType: "struct Products.BoughtProduct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_unique_hash",
        type: "string",
      },
    ],
    name: "ReportProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
