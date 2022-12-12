import { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { TechContext } from "../../Contexts/TechContext";
import { BtCloseModal, BtEdit, BtRemove } from "../Button/style";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../ModalCreate/style.css";

Modal.setAppElement("#root");

export const ModalEdit = () => {
  const { modalEditIsOpen, closeEditModal, TechEdit, selectTech, TechDelete } =
    useContext(TechContext);

  const techEditeSchema = yup.object().shape({
    title: yup.string().required("Este campo é obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    moda: "onBlur",
    defaultValues: {
      id: selectTech.id,
      title: selectTech.title,
      status: selectTech.status,
    },
    resolver: yupResolver(techEditeSchema),
  });

  async function submit(data) {
    await TechEdit(data);
    reset();
  }

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

        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            label={"Nome do projeto"}
            type="title"
            placeholder="Projeto"
            register={register("title")}
          />
          {errors.title?.message && <small>{errors.title.message}</small>}
          <label htmlFor="status"> Status </label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <BtEdit type="submit">Salvar Alteração</BtEdit>
            <BtRemove type="submit" onClick={() => TechDelete(selectTech.id)}>
              Excluir
            </BtRemove>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalEdit;
