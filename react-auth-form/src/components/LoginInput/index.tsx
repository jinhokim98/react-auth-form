import useLogin from "../../hooks/useLogin";
import styles from "./style.module.css";

type LoginInputProps = Omit<ReturnType<typeof useLogin>, "onLoginSubmit" | "resetLoginField">;

const LoginInput = ({ email, handleEmail, password, handlePassword, errorMessage }: LoginInputProps) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <input
          type="email"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          required
          placeholder="email"
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          required
          placeholder="password"
          className={styles.input}
        />
        {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </fieldset>
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </>
  );
};

export default LoginInput;
