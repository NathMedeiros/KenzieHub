import React, { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";
import ModalEdit from "../ModalEdit";

import { List } from "./style";

const ListTech = ({ elt }) => {
  const { openEditModal, modalEditIsOpen } = useContext(TechContext);

  return (
    <>
      <List key={elt.id} onClick={openEditModal}>
        <h4>{elt.title}</h4>
        <p>{elt.status}</p>
      </List>

      {modalEditIsOpen && <ModalEdit />}
    </>
  );
};

export default ListTech;
