import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useRefundProducts, useReportProducts } from "../../api";
import usePostProducts from "../../api/products/usePostProducts";
import useUpdateProducts from "../../api/products/useUpdateProducts";

export default function PiRefundProductForm({ handleClose, product, edit }) {
  //name brand country unique_hash price pieces
  const refundProduct = useRefundProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    refundProduct(formData);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ gap: "20px" }}
    >
      <TextField
        {...register("orderNo", {
          required: {
            value: !edit,
            message: "Order number is required!",
          },
        })}
        defaultValue={product?.code ?? ""}
        error={!!errors?.hash?.message}
        helperText={errors?.hash?.message || ""}
        variant="outlined"
        label="Enter order number"
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
          Refund product
        </Button>
      </Box>
    </Box>
  );
}
