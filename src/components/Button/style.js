import styled from "styled-components";
import { Link } from "react-router-dom";

export const BtEntry = styled.button`
  width: 95%;
  height: 48px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 20px;
`;

export const ButtonRegister = styled.button`
  width: 95%;
  height: 48px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 20px;

  :disabled {
    background: #59323f;
    border: 1.2182px solid #59323f;
  }
`;

export const LinkBack = styled(Link)`
  width: 78px;
  height: 30px;
  background: #212529;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: small;
  border: none;
`;
export const LinkRegister = styled(Link)`
  width: 95%;
  height: 48px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
