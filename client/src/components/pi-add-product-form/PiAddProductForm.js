import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import usePostProducts from "../../api/products/usePostProducts";
import useUpdateProducts from "../../api/products/useUpdateProducts";

export default function PiAddProductForm({ handleClose, product, edit }) {
  //name brand country unique_hash price pieces
  const addProduct = usePostProducts();
  const updateProduct = useUpdateProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    if (!edit) {
      addProduct({
        name: formData.name,
        brand: formData.brand,
        country: formData.country,
        hash: formData.hash,
        price: formData.price,
        pieces: formData.pieces,
      });
      console.log(`Added product`, formData);
    } else {
      console.log(product);
      console.log(formData);
      updateProduct({
        old_hash: product.code || "",
        name: formData.name || "",
        brand: formData.brand || "",
        country: formData.country || "",
        new_hash: formData.hash || "",
        price: formData.price || 0,
        pieces: formData.pieces || 0,
      });
      console.log(`Updated product`, formData);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ gap: "20px" }}
    >
      <TextField
        {...register("name", {
          required: {
            value: !edit,
            message: "Product name is required!",
          },
        })}
        defaultValue={product?.name ?? ""}
        error={!!errors?.name?.message}
        helperText={errors?.name?.message || ""}
        variant="outlined"
        label="Enter product name"
        fullWidth
      />
      <TextField
        {...register("hash", {
          required: {
            value: !edit,
            message: "Barcode is required!",
          },
        })}
        defaultValue={product?.code ?? ""}
        error={!!errors?.hash?.message}
        helperText={errors?.hash?.message || ""}
        variant="outlined"
        label="Enter barcode"
        fullWidth
      />
      <TextField
        {...register("brand", {
          required: {
            value: !edit,
            message: "Product brand is required!",
          },
        })}
        defaultValue={product?.brand ?? ""}
        error={!!errors?.brand?.message}
        helperText={errors?.brand?.message || ""}
        variant="outlined"
        label="Enter product brand"
        fullWidth
      />
      <TextField
        {...register("country", {
          required: {
            value: !edit,
            message: "Country is required!",
          },
        })}
        defaultValue={product?.country ?? ""}
        error={!!errors?.country?.message}
        helperText={errors?.country?.message || ""}
        variant="outlined"
        label="Enter country"
        fullWidth
      />
      <TextField
        {...register("price", {
          required: {
            value: !edit,
            message: "Product price is required!",
          },
          min: {
            value: 0,
            message: "Must be higher than 0 ETH.",
          },
        })}
        defaultValue={product?.price ?? 0.1}
        InputProps={{
          startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
        }}
        error={!!errors?.price?.message}
        helperText={errors?.price?.message || ""}
        variant="outlined"
        label="Enter product price"
        type="number"
        fullWidth
      />
      <TextField
        {...register("pieces", {
          required: {
            value: !edit,
            message: "Product pieces is required!",
          },
          min: {
            value: 1,
            message: "Must be at least 1 piece.",
          },
        })}
        defaultValue={product?.pieces ?? 0}
        error={!!errors?.pieces?.message}
        helperText={errors?.pieces?.message || ""}
        variant="outlined"
        label="Enter product pieces"
        type="number"
        fullWidth
      />
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
          onClick={handleSubmit(onSubmit)}
        >
          {edit ? "Update product" : "Add product"}
        </Button>
      </Box>
    </Box>
  );
}
