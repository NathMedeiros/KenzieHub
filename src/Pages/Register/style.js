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
    height: 971px;
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
  min-height: 750px;

  h3 {
    height: 8px;
    color: #f8f9fa;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    color: #868e96;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 30px;
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

  small {
    margin-top: -10px;
    color: #ff577f;
  }

  select {
    width: 95%;
    height: 48px;
    background: #343b41;
    border: 1px solid #343b41;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  select {
    color: #868e96;
    padding-left: 10px;
    font-family: "Inter", sans-serif;
  }

  input::placeholder {
    outline: none;
    color: #868e96;
    padding-left: 10px;
    font-family: "Inter", sans-serif;
  }
  @media (min-width: 580px) {
    width: 50%;
    height: 900px;
    h3 {
      font-size: 18px;
    }
    label,
    span {
      font-size: 13px;
    }

    input,
    select {
      height: 48px;
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 36px;

  @media (min-width: 580px) {
    width: 55%;
  }

  img {
    width: 97px;
    height: 17px;
  }
`;
