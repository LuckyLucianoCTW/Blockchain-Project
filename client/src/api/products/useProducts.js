import { useEffect, useState } from "react";
import { useContract } from "../../store";

export default function useProducts(params) {
  const [products, setProducts] = useState([]);
  const { contract } = useContract();

  console.log(contract);

  useEffect(() => {
    contract?.methods
      .SearchProduct(
        params?.name || "",
        params?.brand || "",
        params?.country || "",
        params?.hash || ""
      )
      .call()
      .then((data) => {
        setProducts(
          data[1]?.map((product) => ({
            code: product[3],
            name: product[0],
            brand: product[1],
            country: product[2],
            price: product[4],
            pieces: product[5],
          }))
        );
      });
  }, [params, contract]);

  return products;
}
