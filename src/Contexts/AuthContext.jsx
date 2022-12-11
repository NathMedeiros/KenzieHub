import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Api } from "../Lib/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setAuthLoading(false);
      return;
    }

    try {
      const response = await Api.get("profile");

      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  }
  useEffect(() => {
    loadUser();
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await Api.post("sessions", formData);
      localStorage.setItem("@TOKENUSER", response.data.token);
      // localStorage.setItem("@USERID", response.data.user.id);

      const { token, user: userResponse } = response.data;
      setUser(userResponse);

      localStorage.setItem("@TOKEN", token);

      Api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      toast.success("Login realizado com sucesso!");
      console.log(response);
      setUser(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const UserRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await Api.post("users", formData);
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
        setAuthLoading,
        authLoading,
        UserRegister,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
