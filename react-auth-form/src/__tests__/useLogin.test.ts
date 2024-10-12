import { renderHook, act } from "@testing-library/react";
import useLogin from "../hooks/useLogin";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useLogin", () => {
  describe("Email Field", () => {
    test(`이메일 입력이 유효하지 않으면 ${ERROR_MESSAGE.email}메시지를 보여준다.`, () => {
      const { result } = renderHook(() => useLogin());
      const invalidEmail = "invalid-email";

      act(() => {
        result.current.handleEmail(invalidEmail);
      });

      expect(result.current.email).toBe(invalidEmail);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.email);
    });

    test("유효한 이메일 입력 시 에러 메시지가 사라진다", () => {
      const { result } = renderHook(() => useLogin());
      const validEmail = "test@example.com";

      act(() => {
        result.current.handleEmail(validEmail);
      });

      expect(result.current.email).toBe(validEmail);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  describe("Password Field", () => {
    test(`비밀번호 입력이 유효하지 않으면 ${ERROR_MESSAGE.password}메시지를 보여준다.`, () => {
      const { result } = renderHook(() => useLogin());
      const invalidPassword = "cookie";

      act(() => {
        result.current.handlePassword(invalidPassword);
      });

      expect(result.current.password).toBe(invalidPassword);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.password);
    });

    test("유효한 비밀번호 입력 시 에러 메시지가 사라진다", () => {
      const { result } = renderHook(() => useLogin());
      const validPassword = "Cookie!123";

      act(() => {
        result.current.handlePassword(validPassword);
      });

      expect(result.current.password).toBe(validPassword);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  test("로그인 필드를 리셋하면 이메일과 비밀번호 값이 초기화된다", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.handleEmail("cookie@example.com");
      result.current.handlePassword("Cookie!123");
      result.current.resetLoginField();
    });

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
  });
});
