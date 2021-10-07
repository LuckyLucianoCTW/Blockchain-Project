import { useAuth, useContract } from "../../store";

export default function useUpdateProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const updateProduct = ({
    old_hash,
    name,
    brand,
    country,
    new_hash,
    price,
    pieces,
  }) => {
    console.log(old_hash, name, brand, country, new_hash, price, pieces);

    contract?.methods
      .UpdateProduct(
        old_hash,
        name,
        brand,
        country,
        new_hash,
        parseInt(price),
        parseInt(pieces)
      )
      .send({
        from: accountKey,
        gasPrice: 200000000,
        gas: 6721975,
      })
      .then(() => {
        console.log("succesfully added");
      })
      .catch(() => {});
  };

  return updateProduct;
}
