import { Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
`;

export const StyledAddProductButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  background-color: steelblue;
  border-radius: 50%;
  &::before {
    content: "+";
    font-size: 50px;
    font-weight: 400;
    color: white;
  }
`;
export const StyledReportProductButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  background-color: yellow;
  border-radius: 50%;
`;
