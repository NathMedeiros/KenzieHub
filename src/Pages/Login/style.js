import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 80%;

  button {
    cursor: pointer;
  }
  @media (min-width: 1030px) {
    width: 50%;
    margin-top: 100px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: #212529;
  box-shadow: 0px 3px 31px -7px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 95%;
  height: 450px;

  h3 {
    height: 8px;
    color: #f8f9fa;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 36px;
    color: #868e96;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  label {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 10px;
    align-self: flex-start;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  input {
    width: 95%;
    height: 48px;
    background: #343b41;
    border: 1px solid #343b41;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 15px;
  }
  small {
    color: #ff577f;
  }

  input::placeholder {
    color: #868e96;
    padding-left: 10px;
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 580px) {
    width: 50%;
    h3 {
      font-size: 18px;
    }
    label,
    span {
      font-size: 13px;
    }

    input {
      height: 48px;
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 36px;
  padding-bottom: 20px;

  @media (min-width: 580px) {
    width: 55%;
  }

  img {
    width: 144px;
    height: 19px;
  }
`;
