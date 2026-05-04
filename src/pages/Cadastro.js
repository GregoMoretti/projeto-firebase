import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  async function handleCadastro() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
        uid: user.uid
      });

      alert("Usuário cadastrado!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h2>Cadastro</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input type="date" onChange={(e) => setDataNascimento(e.target.value)} />

      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;