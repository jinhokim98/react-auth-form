import React, { useState } from "react";
import styles from "./style.module.css";
import useLogin from "../../hooks/useLogin";
import LoginInput from "../LoginInput";
import useSignup from "../../hooks/useSignup";
import SignupInput from "../SignupInput";

type AuthMode = "Login" | "Signup";

const AuthForm: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("Login");
  const loginProps = useLogin();
  const signupProps = useSignup();

  const isLogin = authMode === "Login";

  return (
    <section className={styles.authFormContainer}>
      <h1 className={styles.title}>{isLogin ? "Login Form" : "Signup Form"}</h1>
      <form className={styles.form}>
        <fieldset className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${isLogin && styles.buttonActive}`}
            type="button"
            onClick={() => setAuthMode("Login")}
          >
            Login
          </button>
          <button
            className={`${styles.button} ${!isLogin && styles.buttonActive}`}
            type="button"
            onClick={() => setAuthMode("Signup")}
          >
            Signup
          </button>
        </fieldset>
        {isLogin ? <LoginInput {...loginProps} /> : <SignupInput {...signupProps} />}
        <button type="submit" className={styles.submitButton}>
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
