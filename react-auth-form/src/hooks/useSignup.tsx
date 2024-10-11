import { useState } from "react";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  return {
    email,
    handleEmail,
    password,
    handlePassword,
    confirmPassword,
    handleConfirmPassword,
  };
};

export default useSignup;
