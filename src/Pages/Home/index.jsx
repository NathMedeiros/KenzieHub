import React, { useContext } from "react";
import { DivHeader, DivUl, DivUser } from "./style";
import { BtNewTech, LinkBack } from "../../components/Button/style";
import Logo from "../../img/Group 189.png";
import { motion } from "framer-motion";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import newTech from "../../img/+.png";
import ListTech from "../../components/LisTech/index";
import ModalCreate from "../../components/ModalCreate";
import { TechContext } from "../../Contexts/TechContext";
import { UlList } from "../../components/LisTech/style";

const Home = () => {
  const { user, newLoading } = useContext(AuthContext);

  const { openModal, modalIsOpen, technology } = useContext(TechContext);

  if (newLoading) {
    return null;
  }
  console.log(user);
  return user ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DivHeader>
        <div>
          <img src={Logo} alt={Logo} />
          <LinkBack
            to={`/`}
            onClick={() => {
              user.user = null;
              localStorage.clear();
            }}
          >
            Sair
          </LinkBack>
        </div>
      </DivHeader>
      <DivUser>
        <div>
          <h3> Olá, {user.name}</h3>
          <p>{user.course_module}</p>
        </div>
      </DivUser>
      <DivUl>
        <h3>Tecnologias</h3>
        <BtNewTech onClick={() => openModal()}>
          <img src={newTech} alt="Inserir" />
        </BtNewTech>
      </DivUl>
      <UlList>
        {technology.map((elt) => (
          <ListTech key={elt.id} elt={elt} />
        ))}
      </UlList>

      {modalIsOpen && <ModalCreate />}
    </motion.div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Home;
