import styled from "styled-components";
import loginBackground from "../../assets/images/login-background.jpg";

export const StyledHomeWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHomeFormWrapper = styled.div`
  background-color: #fff;
  padding: 30px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  gap: 15px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
