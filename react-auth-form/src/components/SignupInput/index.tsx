import useSignup from "../../hooks/useSignup";
import styles from "./style.module.css";

type SignupInputProps = Omit<ReturnType<typeof useSignup>, "onSignupSubmit" | "resetSignupField">;

const SignupInput = ({
  email,
  handleEmail,
  password,
  handlePassword,
  confirmPassword,
  handleConfirmPassword,
  errorMessage,
}: SignupInputProps) => {
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPassword(e.target.value)}
          required
          placeholder="confirm password"
          className={styles.input}
        />
        {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </fieldset>
      <button type="submit" className={styles.submitButton}>
        Signup
      </button>
    </>
  );
};

export default SignupInput;
