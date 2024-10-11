import React from "react";
import styles from "./style.module.css";
import LoginInput from "../LoginInput";
import SignupInput from "../SignupInput";
import useAuthForm from "../../hooks/useAuthForm";

const AuthForm: React.FC = () => {
  const { isLogin, loginProps, signupProps, onSubmit, onLoginModeClick, onSignupModeClick } = useAuthForm();

  return (
    <section className={styles.authFormContainer}>
      <h1 className={styles.title}>{isLogin ? "Login Form" : "Signup Form"}</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <fieldset className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${isLogin && styles.buttonActive}`}
            type="button"
            onClick={onLoginModeClick}
          >
            Login
          </button>
          <button
            className={`${styles.button} ${!isLogin && styles.buttonActive}`}
            type="button"
            onClick={onSignupModeClick}
          >
            Signup
          </button>
        </fieldset>
        {isLogin ? <LoginInput {...loginProps} /> : <SignupInput {...signupProps} />}
      </form>
    </section>
  );
};

export default AuthForm;
