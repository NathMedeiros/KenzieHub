import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121214;
  padding-top: 36px;
  padding-bottom: 36px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    @media (min-width: 896px) {
      width: 48%;
    }
  }
`;

export const DivUser = styled.div`
  border-bottom: 1px solid #212529;
  border-top: 1px solid #212529;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 131px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;

    @media (min-width: 896px) {
      width: 48%;
      display: flex;
      justify-content: space-between;
    }
  }
  h3 {
    color: #ffff;
  }
  p {
    color: #868e96;
    font-size: small;
  }
`;

export const DivUl = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: #ffff;
  font-family: "Inter";
  justify-content: space-between;

  h3 {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    font-size: small;
  }

  @media (min-width: 896px) {
    width: 50%;
  }
`;
