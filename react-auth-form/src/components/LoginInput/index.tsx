import styles from "./style.module.css";

type LoginInputProps = {
  email: string;
  handleEmail: (email: string) => void;
  password: string;
  handlePassword: (password: string) => void;
};

const LoginInput = ({ email, handleEmail, password, handlePassword }: LoginInputProps) => {
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
    </fieldset>
  );
};

export default LoginInput;
