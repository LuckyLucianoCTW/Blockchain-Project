import { useEffect, useState } from "react";
import { useContract } from "../../store";

export default function useReportedProducts(hash) {
  const [products, setProducts] = useState([]);
  const { contract } = useContract();

  useEffect(() => {
    contract?.methods
      .SearchReportedProducts(hash || "")
      .call()
      .then((data) => {
        setProducts(data);
      });
  }, [hash, contract]);

  return products;
}
