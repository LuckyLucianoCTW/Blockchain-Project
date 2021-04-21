import React, { useState } from "react";
import { StyledProductsWrapper } from "./Products.style";
import { useProducts } from "../../api";
import { Box, Grid, TextField } from "@material-ui/core";
import { PiProductItem } from "../../components";

export default function Products() {
  const [query, setQuery] = useState("");
  const products = useProducts();

  return (
    <StyledProductsWrapper>
      <Box mb={3}>
        <TextField
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          variant="outlined"
          label="Search products by barcode"
          fullWidth
        />
      </Box>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PiProductItem {...product} />
          </Grid>
        ))}
      </Grid>
    </StyledProductsWrapper>
  );
}
