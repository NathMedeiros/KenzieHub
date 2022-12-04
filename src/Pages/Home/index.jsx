import React from "react";
import { DivBody, DivHeader, DivUser } from "./style";
import { LinkBack } from "../../components/Button/style";
import Logo from "../../img/Group 189.png";

const Home = ({ user }) => {
  console.log(user);

  return (
    <>
      <DivHeader>
        <div>
          <img src={Logo} alt={Logo} />
          <LinkBack
            to={`/`}
            onClick={() => {
              user = null;
              localStorage.clear();
            }}
          >
            Sair
          </LinkBack>
        </div>
      </DivHeader>
      <DivUser>
        <div>
          <h3> Olá, {user.user.name}</h3>
          <p>{user.user.course_module}</p>
        </div>
      </DivUser>
      <DivBody>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </DivBody>
    </>
  );
};

export default Home;
