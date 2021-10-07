import { useAuth, useContract } from "../../store";

export default function useRefundProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const refundProduct = ({ orderNo }) => {
    contract?.methods
      .RefundProduct(orderNo)
      .send({
        from: accountKey,
      })
      .then(() => {
        console.log("succesfully refunded");
      });
  };

  return refundProduct;
}
