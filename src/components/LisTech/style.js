import styled from "styled-components";

export const UlList = styled.ul`
  width: 80%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  font-family: "Inter";
  background-color: #212529;
  border-radius: 4px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;

  @media (min-width: 896px) {
    width: 50%;
  }
`;

export const List = styled.li`
  width: 90%;
  height: 49px;
  background-color: #121214;
  display: flex;
  align-items: center;
  color: #ffff;
  font-family: "Inter";
  justify-content: space-between;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background-color: #343b41;
  }

  h4 {
    font-family: "Inter";
    font-size: 12px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-size: 10px;
    color: #868e96;
  }
  @media (min-width: 896px) {
    :hover {
      background-color: #343b41;
    }

    h4 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 15px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #868e96;
    }
    button {
      width: 100%;
    }
  }
`;
