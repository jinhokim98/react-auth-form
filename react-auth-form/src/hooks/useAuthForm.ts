import { useState } from "react";
import useLogin from "./useLogin";
import useSignup from "./useSignup";

type AuthMode = "Login" | "Signup";

const useAuthForm = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("Login");
  const { onLoginSubmit, resetLoginField, ...loginProps } = useLogin();
  const { onSignupSubmit, resetSignupField, ...signupProps } = useSignup();

  const isLogin = authMode === "Login";
  const onSubmit = isLogin ? onLoginSubmit : onSignupSubmit;

  const onLoginModeClick = () => {
    resetSignupField();
    setAuthMode("Login");
  };

  const onSignupModeClick = () => {
    resetLoginField();
    setAuthMode("Signup");
  };

  return {
    isLogin,
    loginProps,
    signupProps,
    onSubmit,
    onLoginModeClick,
    onSignupModeClick,
  };
};

export default useAuthForm;
