import { useAuth, useContract } from "../../store";
import { utils } from "web3";

export default function useBuyProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const buyProduct = ({ hash, amount }) => {
    contract?.methods
      .BuyProduct(hash)
      .send({
        from: accountKey,
        value: utils.toWei(amount, "ether"),
        // gasPrice: 0,
        gasLimit: 6721975,
      })
      .then(() => {
        console.log("succesfully bought");
      });
  };

  return buyProduct;
}
