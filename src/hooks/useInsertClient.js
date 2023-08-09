import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const useInsertClient = (docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acess, setAcess] = useState(false);

  const insertOrder = async (data) => {
    setLoading(true);
    try {
      const newClient = { ...data, createAt: Timestamp.now() };
      await addDoc(collection(db, docCollection), newClient);
      localStorage.setItem('formCreate', true)
      setAcess(true);
    } catch (error) {
      setError("Tivemos um problema ao enviar seus dados");
      console.log(error.message)
    }
    setLoading(false);
  };

  return { insertOrder, loading, error, acess };
};
