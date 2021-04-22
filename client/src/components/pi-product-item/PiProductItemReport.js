import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { StyledBuyModalImage } from "./PiProductItem.style";

export default function PiProducItemReport({
  code,
  imageUrl,
  name,
  handleClose,
}) {
  const report = (code) => {
    console.log(`You've reported ${code} as fake.`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ gap: "20px" }}
    >
      <StyledBuyModalImage imageUrl={imageUrl} />
      <Typography variant="h5">
        You are about to report {name} as fake
      </Typography>
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
          color="secondary"
          variant="contained"
          onClick={() => report(code)}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
