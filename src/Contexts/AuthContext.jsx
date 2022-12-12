import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Api } from "../Lib/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  async function loadUser() {
    const tokenValidate = localStorage.getItem("@TOKEN");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    Api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;

    try {
      const response = await Api.get("/profile");

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setNewLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await Api.post("/sessions", formData);
      localStorage.setItem("@TOKENUSER", response.data.token);

      const { token, user: userResponse } = response.data;
      setUser(userResponse);

      localStorage.setItem("@TOKEN", token);

      toast.success("Login realizado com sucesso!");

      Api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const UserRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await Api.post("/users", formData);
      console.log(response);
      toast.success("Usuario Cadastrado");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        user,
        loading,
        setLoading,
        setNewLoading,
        newLoading,
        UserRegister,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
