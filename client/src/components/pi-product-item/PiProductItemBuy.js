import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useBuyProducts } from "../../api";
import { StyledBuyModalImage } from "./PiProductItem.style";

export default function PiProductItemBuy({
  imageUrl,
  name,
  code,
  price,
  handleClose,
}) {
  const buyProduct = useBuyProducts();
  const sendEth = (amount, code) => {
    buyProduct({ hash: code, amount });
    console.log(`You've sent ${amount} ETH for ${code}.`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ gap: "20px" }}
    >
      <StyledBuyModalImage imageUrl={imageUrl} />
      <Typography variant="h5">You are about to buy {name}</Typography>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button onClick={() => handleClose()}>Close</Button>
        <Button
          disableElevation
          size="small"
          color="primary"
          variant="contained"
          onClick={() => sendEth(price, code)}
        >
          Send {price} ETH
        </Button>
      </Box>
    </Box>
  );
}
