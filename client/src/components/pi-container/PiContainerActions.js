import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import { useAuth } from "../../store";
import PiAddProductForm from "../pi-add-product-form/PiAddProductForm";
import PiReportProductForm from "../pi-report-product-form/PiReportProductForm";
import PiRefundProductForm from "../pi-refund-product-form/PiRefundProductForm";
import PiModal from "../pi-modal/PiModal";

export default function SimpleListMenu() {
  const { isAdmin } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [addProductModal, setAddProductModal] = useState();
  const [reportProductModal, setReportProductModal] = useState();
  const [refundProductModal, setRefundProductModal] = useState();

  const options = isAdmin
    ? [
        {
          label: "Add product",
          call: () => {
            setAddProductModal(true);
          },
        },
        {
          label: "Report product",
          call: () => {
            setReportProductModal(true);
          },
        },
        {
          label: "Refund order",
          call: () => {
            setRefundProductModal(true);
          },
        },
      ]
    : [
        {
          label: "Report product",
          call: () => {
            setReportProductModal(true);
          },
        },
      ];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box position="fixed" right="15px" bottom="15px">
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Actions"
              secondary="Show all posible actions"
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option.label}
              selected={false}
              onClick={(event) => {
                option.call();
                handleClose();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <PiModal
        isOpen={addProductModal}
        handleClose={() => setAddProductModal(false)}
      >
        <PiAddProductForm />
      </PiModal>
      <PiModal
        isOpen={reportProductModal}
        handleClose={() => setReportProductModal(false)}
      >
        <PiReportProductForm />
      </PiModal>
      <PiModal
        isOpen={refundProductModal}
        handleClose={() => setRefundProductModal(false)}
      >
        <PiRefundProductForm />
      </PiModal>
    </>
  );
}
