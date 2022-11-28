import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { StyledProductsWrapper } from "./Products.style";
import ProductsAll from "./ProductsAll";
import ProductsReported from "./ProductsReported";
import ProductsBought from "./ProductsBought";

export default function Products() {
  const [currentTab, setCurrentTab] = useState("ALL");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <StyledProductsWrapper>
        <Tabs
          variant="fullWidth"
          value={currentTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value="ALL" label="All" />
          <Tab value="ORDERED" label="Ordered" />
          <Tab value="REPORTED" label="Check product" color="secondary" />
        </Tabs>
        <Box
          py={3}
          display="flex"
          justifyContent="space-between"
          fontWeight="700"
        >
          <Typography
            variant="h5"
            color="primary"
            style={{
              fontWeight: 700,
            }}
          >
            {currentTab}
          </Typography>
          {/* <Typography
            variant="h6"
            style={{
              fontWeight: 400,
            }}
          >
            ({products.length} products)
          </Typography> */}
        </Box>
        {currentTab === "ALL" && <ProductsAll />}
        {currentTab === "REPORTED" && <ProductsReported />}
        {currentTab === "ORDERED" && <ProductsBought />}
      </StyledProductsWrapper>
    </>
  );
}
