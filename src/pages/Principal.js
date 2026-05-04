import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Principal() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const user = auth.currentUser;

      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    }

    getUserData();
  }, []);

  return (
    <div>
      <h2>Principal</h2>

      {userData && (
        <>
          <p>Nome: {userData.nome}</p>
          <p>Sobrenome: {userData.sobrenome}</p>
          <p>Data de Nascimento: {userData.dataNascimento}</p>
        </>
      )}
    </div>
  );
}

export default Principal;