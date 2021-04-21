import { Box, Button, Grow, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { BrowserRoutes } from "../../constants";
import { StyledHomeFormWrapper, StyledHomeWrapper } from "./Home.style";

export default function Home() {
  const history = useHistory();
  const { register, error, handleSubmit } = useForm();

  const onSubmit = () => {
    history.push(BrowserRoutes.Default.Products);
  };

  return (
    <StyledHomeWrapper>
      <Grow in>
        <StyledHomeFormWrapper>
          <Box maxWidth="300px" textAlign="center">
            <Typography variant="h4">Welcome to ProdIdentity!</Typography>
          </Box>
          <Box>
            <TextField
              {...register("accountKey", {
                required: {
                  value: true,
                  message: "Account key is required!",
                },
              })}
              error={!!error?.accountKey?.message}
              helperText={error?.accountKey?.message || ""}
              variant="outlined"
              label="Enter account key"
              fullWidth
            />
          </Box>
          <Box>
            <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
              <Typography>LOG-IN</Typography>
            </Button>
          </Box>
        </StyledHomeFormWrapper>
      </Grow>
    </StyledHomeWrapper>
  );
}
