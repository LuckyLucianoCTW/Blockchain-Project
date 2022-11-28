import styled from "styled-components";

export const StyledProductsWrapper = styled.div``;

export const StyledBoughtProductHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 15px;
  font-weight: 700;
  color: #333;
`;

export const StyledBoughtProduct = styled.div`
  border-radius: 10px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 15px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
`;
