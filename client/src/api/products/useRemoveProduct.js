import { useAuth, useContract } from "../../store";

export default function useRemoveProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const removeProduct = ({ hash }) => {
    contract?.methods
      .RemoveProduct(hash)
      .send({
        from: accountKey,
        gasPrice: 200000000,
        gas: 6721975,
      })
      .then(() => {
        console.log("succesfully removed");
      });
  };

  return removeProduct;
}
