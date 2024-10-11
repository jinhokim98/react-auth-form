import styles from "./style.module.css";

type SignupInputProps = {
  email: string;
  handleEmail: (email: string) => void;
  password: string;
  handlePassword: (password: string) => void;
  confirmPassword: string;
  handleConfirmPassword: (confirmPassword: string) => void;
};

const SignupInput = ({
  email,
  handleEmail,
  password,
  handlePassword,
  confirmPassword,
  handleConfirmPassword,
}: SignupInputProps) => {
  return (
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
    </fieldset>
  );
};

export default SignupInput;
