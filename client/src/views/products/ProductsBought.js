import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useBoughtProducts } from "../../api";
import { PiProductItem } from "../../components";
import {
  StyledBoughtProduct,
  StyledBoughtProductHeader,
} from "./Products.style";

export default function ProductsBought() {
  const [filters, setFilters] = useState();
  const products = useBoughtProducts(filters);
  return (
    <>
      <StyledBoughtProductHeader>
        <Typography>Unique barcode</Typography>
        <Typography>Buyer address</Typography>
        <Typography>Order number</Typography>
      </StyledBoughtProductHeader>
      {products.map((product, index) => (
        <StyledBoughtProduct>
          <Typography>{product.code}</Typography>
          <Typography>{product.buyer}</Typography>
          <Typography>{product.orderNo}</Typography>
        </StyledBoughtProduct>
      ))}
    </>
  );
}
