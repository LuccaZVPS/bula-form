import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "./Moda";

export const Table = () => {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const getEvents = async () => {
    const { data } = await axios.get(
      "https://apidev.gestaonaweb.com.br/Evento",

      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    setEvents([...data.listaEvento]);
  };

  useEffect(() => getEvents, []);

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <button onClick={() => setOpenModal(true)}>Criar Evento</button>
      </div>

      <table>
        <thead>
          <th>
            <td>Tema</td>
            <td>Descrição</td>
            <td>Data</td>
          </th>
        </thead>
        <tbody
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {events.map((event) => (
            <th key={event.id}>
              <td>{event.tema}</td>
              <td>{event.descricao}</td>
              <td>{event.dataEvento}</td>
            </th>
          ))}
        </tbody>
      </table>

      {openModal && (
        <Modal getEvents={getEvents} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};
