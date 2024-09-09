import { object, string, InferType } from "yup";

export const accountSchema = object({
  email: string()
    .required()
    .email("유효한 이메일 형식이어야 합니다.")
    .test(
      "is-company-email",
      "이메일은 @jnpmedi.com 도메인이어야 합니다.",
      (email) => {
        return email?.endsWith("@jnpmedi.com");
      }
    ),
  password: string()
    .required()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .test(
      "has-uppercase",
      "비밀번호에는 최소 1개의 대문자가 포함되어야 합니다.",
      (password) => {
        return /[A-Z]/.test(password || "");
      }
    )
    .test(
      "has-number",
      "비밀번호에는 최소 1개의 숫자가 포함되어야 합니다.",
      (password) => {
        return /[0-9]/.test(password || "");
      }
    )
    .test(
      "has-special-char",
      "비밀번호에는 최소 1개의 특수문자가 포함되어야 합니다.",
      (password) => {
        return /[!@#$%^&*]/.test(password || "");
      }
    ),
});

export type Account = InferType<typeof accountSchema>;
