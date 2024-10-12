import { renderHook, act } from "@testing-library/react";
import useSignup from "../hooks/useSignup";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useSignup", () => {
  describe("Email Field", () => {
    test(`이메일 입력이 유효하지 않으면 ${ERROR_MESSAGE.email} 메시지를 보여준다.`, () => {
      const { result } = renderHook(() => useSignup());
      const invalidEmail = "invalid-email";

      act(() => {
        result.current.handleEmail(invalidEmail);
      });

      expect(result.current.email).toBe(invalidEmail);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.email);
    });

    test("유효한 이메일 입력 시 에러 메시지가 사라진다", () => {
      const { result } = renderHook(() => useSignup());
      const validEmail = "test@example.com";

      act(() => {
        result.current.handleEmail(validEmail);
      });

      expect(result.current.email).toBe(validEmail);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  describe("Password Field", () => {
    test(`비밀번호 입력이 유효하지 않으면 ${ERROR_MESSAGE.password} 메시지를 보여준다.`, () => {
      const { result } = renderHook(() => useSignup());
      const invalidPassword = "cookie";

      act(() => {
        result.current.handlePassword(invalidPassword);
      });

      expect(result.current.password).toBe(invalidPassword);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.password);
    });

    test("유효한 비밀번호 입력 시 에러 메시지가 사라진다", () => {
      const { result } = renderHook(() => useSignup());
      const validPassword = "Cookie!123";

      act(() => {
        result.current.handlePassword(validPassword);
      });

      expect(result.current.password).toBe(validPassword);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  describe("Confirm Password Field", () => {
    test(`비밀번호 확인 입력이 유효하지 않으면 ${ERROR_MESSAGE.confirmPassword} 메시지를 보여준다.`, () => {
      const { result } = renderHook(() => useSignup());
      const validPassword = "Cookie!123";
      const invalidConfirmPassword = "Cookie!1234";

      act(() => {
        result.current.handlePassword(validPassword);
        result.current.handleConfirmPassword(invalidConfirmPassword);
      });

      expect(result.current.confirmPassword).toBe(invalidConfirmPassword);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.confirmPassword);
    });

    test("비밀번호 확인이 유효할 때 에러 메시지가 사라진다", () => {
      const { result } = renderHook(() => useSignup());
      const validPassword = "Cookie!123";
      const validConfirmPassword = "Cookie!123";

      act(() => {
        result.current.handlePassword(validPassword);
      });

      act(() => {
        result.current.handleConfirmPassword(validConfirmPassword);
      });

      expect(result.current.confirmPassword).toBe(validConfirmPassword);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  test("가입 필드를 리셋하면 이메일, 비밀번호 및 비밀번호 확인 값이 초기화된다", () => {
    const { result } = renderHook(() => useSignup());

    act(() => {
      result.current.handleEmail("test@example.com");
      result.current.handlePassword("Cookie!123");
      result.current.handleConfirmPassword("Cookie!123");
      result.current.resetSignupField();
    });

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.confirmPassword).toBe("");
  });
});
