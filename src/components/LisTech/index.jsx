import React, { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";
import ModalEdit from "../ModalEdit";

import { List } from "./style";

const ListTech = ({ elt }) => {
  const { openEditModal, modalEditIsOpen, setSelectTech } =
    useContext(TechContext);

  return (
    <>
      <List
        onClick={() => {
          openEditModal();
          setSelectTech(elt);
        }}
      >
        <h4>{elt.title}</h4>
        <p>{elt.status}</p>
      </List>

      {modalEditIsOpen && <ModalEdit />}
    </>
  );
};

export default ListTech;
