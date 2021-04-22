import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function PiAddProductForm({ handleClose }) {
  //name brand country unique_hash price pieces

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(`Added product`, formData);
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
            value: true,
            message: "Product name is required!",
          },
        })}
        error={!!errors?.name?.message}
        helperText={errors?.name?.message || ""}
        variant="outlined"
        label="Enter product name"
        fullWidth
      />
      <TextField
        {...register("brand", {
          required: {
            value: true,
            message: "Product brand is required!",
          },
        })}
        error={!!errors?.brand?.message}
        helperText={errors?.brand?.message || ""}
        variant="outlined"
        label="Enter product brand"
        fullWidth
      />
      <TextField
        {...register("country", {
          required: {
            value: true,
            message: "Country is required!",
          },
        })}
        error={!!errors?.country?.message}
        helperText={errors?.country?.message || ""}
        variant="outlined"
        label="Enter country"
        fullWidth
      />
      <TextField
        {...register("price", {
          required: {
            value: true,
            message: "Product price is required!",
          },
          min: {
            value: 1,
            message: "Must be at least 1 ETH.",
          },
        })}
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
            value: true,
            message: "Product pieces is required!",
          },
          min: {
            value: 1,
            message: "Must be at least 1 piece.",
          },
        })}
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
          Add product
        </Button>
      </Box>
    </Box>
  );
}
