import styled from "styled-components";

export const StyledBuyModalImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;

  border-radius: 5px;
`;
