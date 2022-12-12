import React from "react";
import { InputRegister, Fieldset } from "./style";

const Input = ({
  name,
  id,
  label,
  type,
  value,
  placeholder,
  register,
  disabled,
}) => {
  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>
      <InputRegister
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        id={id}
        {...register}
      />
    </Fieldset>
  );
};

export default Input;
