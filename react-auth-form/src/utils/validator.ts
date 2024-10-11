import ERROR_MESSAGE from "../constants/errorMessage";
import RULE from "../constants/rule";

type ValidationResult = {
  isValid: boolean;
  errorMessage: string | null;
};

export const validateEmail = (email: string): ValidationResult => {
  if (!RULE.email.test(email)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.email };
  }

  return { isValid: true, errorMessage: null };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!RULE.password.test(password)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.password };
  }

  return { isValid: true, errorMessage: null };
};

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.confirmPassword };
  }

  return { isValid: true, errorMessage: null };
};
