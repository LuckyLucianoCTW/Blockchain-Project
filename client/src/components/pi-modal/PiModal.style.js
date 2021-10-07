import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalWrapper = styled.div`
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 5px;
  max-width: 600px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
