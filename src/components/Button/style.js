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

export const BtNewTech = styled.button`
  background-color: #212529;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const BtCloseModal = styled.button`
  background-color: transparent;
  border: none;
  width: 11px;
  height: 26px;
  cursor: pointer;
  color: #868e96;
`;

export const BtTechRegister = styled.button`
  width: 95%;
  color: #f8f9fa;
  height: 48px;
  background: #ff577f;
  border: 1px solid #ff577f;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const BtEdit = styled.button`
  width: 60%;
  color: #f8f9fa;
  height: 48px;
  background: #ff577f;
  border: 1px solid #ff577f;
  border-radius: 4px;
  margin-left: 15px;

  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  :disabled {
    background: #59323f;
    border: 1px solid #59323f;
  }
`;

export const BtRemove = styled.button`
  width: 30%;
  color: #f8f9fa;
  height: 48px;
  background: #868e96;
  border: 1px solid #868e96;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;
