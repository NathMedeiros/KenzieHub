import logo from "../../img/Group 189.png";
import { ButtonRegister, LinkBack } from "../../components/Button/style";
import { Form, DivHeader, DivForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/index";
import { Api } from "../../Lib/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = ({ loading, setLoading }) => {
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Este campo é obrigatorio!")
      .min(3, "O nome precisa ter no minimo 3 caracteres.")
      .max(100, "O nome pode ter no maximo 100 caracteres."),
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
    confirmPassword: yup
      .string()
      .required("Este campo é obrigatorio!")
      .oneOf([yup.ref("password"), null], "A senha não confere"),
    bio: yup.string().required("Este campo é obrigatorio!"),
    contact: yup.string().required("Este campo é obrigatorio!"),
    course_module: yup.string().required("Este campo é obrigatorio!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const UserRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await Api.post("users", formData);
      console.log(response);
      toast.success("Usuario Cadastrado");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    await UserRegister(data);
    console.log(data);

    setTimeout(() => {
      navigate("/");
    }, 2000);

    reset();
  };
  return (
    <DivForm>
      <DivHeader>
        <img src={logo} alt={logo} />
        <LinkBack to={`/`}>Voltar</LinkBack>
      </DivHeader>
      <Form onSubmit={handleSubmit(submit)} noValidate>
        <h3>Crie sua Conta</h3>
        <p>Rapido e grátis, vamos nessa</p>

        <Input
          label={"Nome"}
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          disabled={loading}
        />
        {errors.name?.message && <small>{errors.name.message}</small>}

        <Input
          label={"Email"}
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
          disabled={loading}
        />
        {errors.email?.message && <small>{errors.email.message}</small>}

        <Input
          label={"Senha"}
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          disabled={loading}
        />
        {errors.password?.message && <small>{errors.password.message}</small>}

        <Input
          label={"Confirmar Senha"}
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("confirmPassword")}
          disabled={loading}
        />
        {errors.confirmPassword?.message && (
          <small>{errors.confirmPassword.message}</small>
        )}

        <Input
          label={"Bio"}
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          disabled={loading}
        />
        {errors.bio?.message && <small>{errors.bio.message}</small>}

        <Input
          label={"Contato"}
          type="text"
          placeholder="Opção de contato"
          register={register("contact")}
          disabled={loading}
        />
        {errors.contact?.message && <small>{errors.contact.message}</small>}

        <label htmlFor="course_module"> Selecionar Modulo </label>
        <select name="text" id="course_module" {...register("course_module")}>
          <option value="">Escolha o modulo</option>
          <option value="Primeiro Modulo (Introdução ao Frontend)">
            Primeiro Modulo(Introdução ao Frontend)
          </option>
          <option value="Segundo Modulo (Frontend avançado)">
            Segundo Modulo (Frontend avançado)
          </option>
          <option value="Terceiro Modulo (Introdução ao Backend)">
            Terceiro Modulo (Introdução ao Backend)
          </option>
          <option value="Quarto Modulo (Backend avançado)">
            Quarto Modulo (Backend avançado)
          </option>
        </select>
        {errors.module?.message && <small>{errors.module.message}</small>}
        <ButtonRegister type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </ButtonRegister>
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
  );
};

export default Register;
