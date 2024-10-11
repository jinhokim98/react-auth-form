import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validator";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEmail = (email: string) => {
    setEmail(email);
    setErrorMessage(validateEmail(email).errorMessage);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setErrorMessage(validatePassword(password).errorMessage);
  };

  const onLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (errorMessage === null) alert(`${email}, ${password}`);
  };

  const resetLoginField = () => {
    setEmail("");
    setPassword("");
  };

  return {
    email,
    handleEmail,
    password,
    handlePassword,
    errorMessage,
    onLoginSubmit,
    resetLoginField,
  };
};

export default useLogin;
