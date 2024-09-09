import "./App.css";
import { Zod } from "./zod";
import { Yup } from "./yup";

function App() {
  return (
    <div className="App">
      <h1>Zod Example</h1>
      <h2>이메일 검증</h2>
      <Zod />

      <h1>Yup Example</h1>
      <h2>이메일 검증</h2>
      <Yup />
    </div>
  );
}

export default App;
