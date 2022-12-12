import React from "react";
import { BtEntry, LinkRegister } from "../../components/Button/style";
import { DivForm, Form, DivHeader } from "./style";
import Logo from "../../img/Group 189.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const { userLogin, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Este campo é obrigatorio!")
      .email("É necessario inserir um email valido."),
    password: yup
      .string()
      .required("Este campo é obrigatorio!")
      .matches(/(?=.*?[A-z])/, "É necessário uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "Insira pelo menos um dígito")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Insira um caractere especial")
      .matches(/.{8,}/, "É necessario no mínimo 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    await userLogin(data);
    if (localStorage.getItem("@TOKEN")) {
      setTimeout(() => {
        navigate("/home");
      }, 4000);
      reset();
    } else {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DivForm>
        <DivHeader>
          <img src={Logo} alt="" />
        </DivHeader>
        <Form onSubmit={handleSubmit(submit)} noValidate>
          <h3>Login</h3>
          <Input
            label={"Email"}
            type="email"
            placeholder="Digite aqui seu email"
            register={register("email")}
          />
          {errors.email?.message && <small>{errors.email.message}</small>}
          <Input
            label={"Senha"}
            type="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
          />
          {errors.password?.message && <small>{errors.password.message}</small>}
          <BtEntry
            onSubmit={handleSubmit(submit)}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Entrar"}
          </BtEntry>
          ;<p>Ainda não possui uma conta?</p>
          <LinkRegister to={`/register`}>Cadastre-se</LinkRegister>
        </Form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </DivForm>
    </motion.div>
  );
};

export default Login;
