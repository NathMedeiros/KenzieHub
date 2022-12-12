import { useContext } from "react";
import Modal from "react-modal";
import { TechContext } from "../../Contexts/TechContext";
import { BtCloseModal, BtTechRegister } from "../Button/style";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../ModalCreate/style.css";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

export const ModalCreate = () => {
  const { closeModal, modalIsOpen, techRegister } = useContext(TechContext);

  const techSchema = yup.object().shape({
    title: yup.string().required("Este campo é obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(techSchema),
  });

  async function submit(data) {
    const info = { ...data };
    await techRegister(info);
    reset();
  }

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="divHeader">
          <h4>Cadastrar Tecnologia</h4>
          <BtCloseModal onClick={closeModal}>X</BtCloseModal>
        </div>

        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            label={"Nome"}
            type="title"
            placeholder="Tecnologia"
            register={register("title")}
          />
          {errors.title?.message && <small>{errors.title.message}</small>}
          <label htmlFor="status"> Selecionar Modulo </label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <BtTechRegister>Cadastrar Tecnologia </BtTechRegister>
        </form>
      </Modal>
    </div>
  );
};

export default ModalCreate;
