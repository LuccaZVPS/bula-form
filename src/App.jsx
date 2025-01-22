import { useState } from "react";
import "./App.css";
import axios from "axios";

function App({ getEvents }) {
  const [data, setData] = useState({
    tema: "",
    descricao: "",
    dataEvento: "",
  });
  const onSubmit = () => {
    axios.post(
      "https://apidev.gestaonaweb.com.br/Evento",
      { ...data },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    getEvents();
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, tema: e.target.value }))
          }
          type="text"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, descricao: e.target.value }))
          }
          type="text"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, dataEvento: e.target.value }))
          }
          type="date"
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
