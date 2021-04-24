import { useAuth, useContract } from "../../store";
import { v4 as uuidv4 } from "uuid";

export default function usePostProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const addProduct = ({ name, brand, country, price, pieces }) => {
    console.log(parseInt(price));
    contract?.methods
      .AddProduct(
        name,
        brand,
        country,
        uuidv4(),
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
