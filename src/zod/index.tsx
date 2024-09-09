import { useState } from "react";
import { accountSchema } from "./accountSchema";

export const Zod = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const handleButton = () => {
    const result = accountSchema.safeParse({ email, password });

    if (result.success) {
      setStatus(true);
      console.log("로그인 데이터 유효함:", result.data);
    } else {
      setStatus(false);
      console.log("오류 발생:", result.error.errors);
    }
  };

  return (
    <section>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButton();
            }
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButton();
            }
          }}
        />
      </div>
      <button type="button" onClick={handleButton}>
        검증
      </button>
      <p>상태: {status ? "정상" : "비 정상"}</p>
    </section>
  );
};
