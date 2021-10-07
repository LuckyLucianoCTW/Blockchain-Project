import { Grid, Box } from "@material-ui/core";
import { default as React, useState } from "react";
import { useProducts } from "../../api";
import { PiProductItem, PiModal, PiAddProductForm } from "../../components";
import ProductsSearch from "./ProductsSearch";

export default function ProductsAll() {
  const [filters, setFilters] = useState();
  const [editProductModal, setEditProductModal] = useState(undefined);
  const products = useProducts(filters);
  return (
    <>
      <Box mb={5}>
        <ProductsSearch setFilters={setFilters} />
      </Box>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <PiProductItem
              {...product}
              mountTimeout={index * 500}
              handleEdit={() => setEditProductModal(product)}
            />
          </Grid>
        ))}
      </Grid>
      <PiModal
        isOpen={!!editProductModal}
        handleClose={() => setEditProductModal(undefined)}
      >
        <PiAddProductForm
          handleClose={() => setEditProductModal(undefined)}
          product={editProductModal}
          edit
        />
      </PiModal>
    </>
  );
}
