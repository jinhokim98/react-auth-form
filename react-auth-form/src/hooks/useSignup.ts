import { useState } from "react";
import { validateConfirmPassword, validateEmail, validatePassword } from "../utils/validator";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEmail = (email: string) => {
    setEmail(email);
    setErrorMessage(validateEmail(email).errorMessage);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setErrorMessage(validatePassword(password).errorMessage);
  };

  const handleConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
    setErrorMessage(validateConfirmPassword(password, confirmPassword).errorMessage);
  };

  const onSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (errorMessage === null) alert(`${email}, ${password}`);
  };

  const resetSignupField = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return {
    email,
    handleEmail,
    password,
    handlePassword,
    confirmPassword,
    handleConfirmPassword,
    errorMessage,
    onSignupSubmit,
    resetSignupField,
  };
};

export default useSignup;
