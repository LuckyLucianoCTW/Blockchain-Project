import styled from "styled-components";

export const StyledBuyModalImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;

  border-radius: 5px;
`;

export const StyledTopActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  /* z-index: 999; */

  transform: translate(0, -50%);

  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const IconButton = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${({ color }) => color};

  path {
    fill: #fff;
  }
`;
