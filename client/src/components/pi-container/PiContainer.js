import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useAuth } from "../../store";
import PiAddProductForm from "../pi-add-product-form/PiAddProductForm";
import PiModal from "../pi-modal/PiModal";
import { StyledAddProductButton, StyledContainer } from "./PiContainer.style";

export default function PiContainer({ children }) {
  const { isAdmin, resetProfile } = useAuth();
  const [addProductModal, setAddProductModal] = useState();

  return (
    <>
      <StyledContainer>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button onClick={() => resetProfile()}>
            <Typography color="error">Log out</Typography>
          </Button>
        </Box>
        {children}
        {isAdmin && (
          <StyledAddProductButton onClick={() => setAddProductModal(true)} />
        )}
      </StyledContainer>

      <PiModal
        isOpen={addProductModal}
        handleClose={() => setAddProductModal(false)}
      >
        <PiAddProductForm />
      </PiModal>
    </>
  );
}
