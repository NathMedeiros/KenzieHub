import { useContext } from "react";
import Modal from "react-modal";
import { TechContext } from "../../Contexts/TechContext";
import { BtCloseModal, BtEdit, BtRemove } from "../Button/style";
import Input from "../Input";
import "../ModalCreate/style.css";

Modal.setAppElement("#root");

export const ModalEdit = () => {
  const { modalEditIsOpen, closeEditModal } = useContext(TechContext);

  return (
    <div className="container">
      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="divHeader">
          <h4>Tecnologia Detalhes</h4>
          <BtCloseModal onClick={closeEditModal}>X</BtCloseModal>
        </div>

        <form>
          <Input label={"Nome do projeto"} type="text" placeholder="Projeto" />
          <label htmlFor=""> Status </label>
          <select name="" id="">
            <option value="1">Iniciante</option>
            <option value="2">Intermediário</option>
            <option value="3">Avançado</option>
          </select>
          <div>
            <BtEdit>Salvar Alteração</BtEdit>
            <BtRemove>Excluir</BtRemove>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalEdit;
