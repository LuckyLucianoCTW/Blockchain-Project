import { Box, Grid, Tab, Tabs, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useProducts } from "../../api";
import { PiProductItem } from "../../components";
import { StyledProductsWrapper } from "./Products.style";

export default function Products() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  const products = useProducts();

  return (
    <StyledProductsWrapper>
      <Box position="sticky">
        <TextField
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          variant="outlined"
          label="Search products by barcode"
          fullWidth
        />
      </Box>
      <Tabs
        variant="fullWidth"
        value={filter}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab value="ALL" label="All" />
        <Tab value="REPORTED" label="Reported" />
        <Tab value="ORDERED" label="Ordered" />
      </Tabs>
      <Box
        py={3}
        display="flex"
        justifyContent="space-between"
        fontWeight="700"
      >
        <Typography
          variant="h5"
          color="primary"
          style={{
            fontWeight: 700,
          }}
        >
          {filter}
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontWeight: 400,
          }}
        >
          ({products.length} products)
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <PiProductItem {...product} mountTimeout={index * 500} />
          </Grid>
        ))}
      </Grid>
    </StyledProductsWrapper>
  );
}
