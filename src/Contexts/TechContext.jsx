import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../Lib/axios";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, loadUser } = useContext(AuthContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalEditIsOpen, setModalIsOpen] = useState(false);

  const [selectTech, setSelectTech] = useState(null);

  const [loading, setLoading] = useState(false);

  const techs = user?.techs;

  function openEditModal() {
    setModalIsOpen(true);
  }

  function closeEditModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const techRegister = async (data) => {
    try {
      setLoading(true);
      await Api.post("users/techs", data);
      loadUser();
      setIsOpen(false);
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      toast.error("Erro! Tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        modalEditIsOpen,
        openEditModal,
        closeEditModal,
        selectTech,
        setSelectTech,
        loading,
        setLoading,
        techs,
        techRegister,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
