import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch {
      alert("Usuário não cadastrado!");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;