import React, { useState } from "react";
import { useAuth } from "../../store";
import PiAddProductForm from "../pi-add-product-form/PiAddProductForm";
import PiModal from "../pi-modal/PiModal";
import { StyledAddProductButton, StyledContainer } from "./PiContainer.style";

export default function PiContainer({ children }) {
  const { isAdmin } = useAuth();
  const [addProductModal, setAddProductModal] = useState();

  return (
    <>
      <StyledContainer>
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
