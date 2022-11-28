import { useAuth, useContract } from "../../store";

export default function useReportProducts() {
  const { accountKey } = useAuth();
  const { contract } = useContract();

  const reportProduct = ({ hash }) => {
    contract?.methods
      .ReportProduct(hash)
      .send({
        from: accountKey,
      })
      .then(() => {
        console.log("succesfully reported");
      });
  };

  return reportProduct;
}
