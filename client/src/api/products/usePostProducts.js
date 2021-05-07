import { useAuth, useContract } from "../../store";

export default function usePostProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const addProduct = ({ name, brand, country,hash, price, pieces }) => {
    console.log(parseInt(price));
    contract?.methods
      .AddProduct(
        name,
        brand,
        country,
        hash,
        parseInt(price),
        parseInt(pieces)
      )
      .send({
        from: accountKey,
      })
      .then(() => {
        console.log("succesfully added");
      });
  };

  return addProduct;
}
