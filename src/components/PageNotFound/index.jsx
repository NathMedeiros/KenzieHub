import React from "react";
import NotFound from "../../img/corrigindo-erros-404.png.png";
import { DivNotFound } from "./style";

const Index = () => {
  return (
    <DivNotFound>
      <img src={NotFound} alt="" />
    </DivNotFound>
  );
};

export default Index;
