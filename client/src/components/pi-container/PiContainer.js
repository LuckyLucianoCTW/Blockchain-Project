import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useAuth } from "../../store";
import PiAddProductForm from "../pi-add-product-form/PiAddProductForm";
import PiModal from "../pi-modal/PiModal";
import { StyledAddProductButton, StyledContainer } from "./PiContainer.style";
import PiContainerActions from "./PiContainerActions";
// import {ReportIcon} from "@material-ui/icons";

export default function PiContainer({ children }) {
  const { isAdmin, accountKey } = useAuth();

  return (
    <>
      <StyledContainer>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          <Typography>Your account: {accountKey}</Typography>
        </Box>
        {children}
        <PiContainerActions />
        {/* {isAdmin && (
          <StyledAddProductButton onClick={() => setAddProductModal(true)} />
        )} */}
        {/* <StyledReportProductButton onClick={() => setReportProductModal(true)}> */}
        {/* <ReportIcon /> */}
        {/* <Typography>Report product</Typography>
        </StyledReportProductButton> */}
      </StyledContainer>
    </>
  );
}
