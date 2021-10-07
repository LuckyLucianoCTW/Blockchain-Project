import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function ProductsSearch({ setFilters }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    setFilters(formData);
  };

  return (
    <Box position="sticky" display="flex">
      <TextField
        {...register("name")}
        variant="outlined"
        label="Product name"
        fullWidth
      />
      <TextField
        {...register("brand")}
        variant="outlined"
        label="Product brand"
        fullWidth
      />
      <TextField
        {...register("country")}
        variant="outlined"
        label="Product country"
        fullWidth
      />
      <TextField
        {...register("hash")}
        variant="outlined"
        label="Barcode"
        fullWidth
      />
      <Box mx={2} display="flex" alignItems="center">
        <Button onClick={handleSubmit(onSubmit)}>
          <Typography color="primary">Search</Typography>
        </Button>
      </Box>
    </Box>
  );
}
