import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useReportedProducts } from "../../api";

export default function ProductsReported() {
  const [hash, setHash] = useState("");
  const isReported = useReportedProducts(hash);

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setHash(e.target.value);
    }
  };

  return (
    <>
      <TextField
        variant="outlined"
        label="Check barcode"
        onKeyDown={keyPress}
        fullWidth
      />

      {hash !== "" && (
        <>
          {isReported
            ? "This product was reported!"
            : "This product was not reported"}
        </>
      )}
    </>
  );
}
