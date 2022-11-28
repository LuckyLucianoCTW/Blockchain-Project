import { useEffect, useState } from "react";
import { useAuth, useContract } from "../../store";

export default function useBoughtProducts() {
  const [products, setProducts] = useState([]);
  const { accountKey } = useAuth();
  const { contract } = useContract();

  useEffect(() => {
    contract?.methods
      .SearchPastOrders(accountKey || "")
      .call()
      .then((data) => {
        setProducts(
          data[1]
            ?.map((product) => ({
              code: product[0],
              buyer: product[1],
              orderNo: product[2],
            }))
            .filter((item) => !!item.code)
        );
      });
  }, [accountKey, contract]);

  return products;
}
