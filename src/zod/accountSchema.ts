import { z } from "zod";

export const accountSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => email.endsWith("@jnpmedi.com"), {
      message: "이메일은 @jnpmedi.com 도메인이어야 합니다.",
    }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
    .refine((password) => /[A-Z]/.test(password), {
      message: "비밀번호에는 최소 1개의 대문자가 포함되어야 합니다.",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "비밀번호에는 최소 1개의 숫자가 포함되어야 합니다.",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "비밀번호에는 최소 1개의 특수문자가 포함되어야 합니다.",
    }),
});
export type Account = z.infer<typeof accountSchema>;
