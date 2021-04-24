import { useAuth, useContract } from "../../store";

export default function useBuyProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const buyProduct = ({ hash, amount }) => {
    console.log(hash, amount);
    contract?.methods
      .BuyProduct(hash)
      .send({
        from: accountKey,
        value: parseInt(amount),
      })
      .then(() => {
        console.log("succesfully bought");
      });
  };

  return buyProduct;
}
