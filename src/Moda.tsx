import App from "./App";
import React from "react";
export function Modal({ onClose, getEvents }) {
  return (
    <div
      onClick={onClose}
      style={{
        width: "100%",
        height: "100vh",
        zIndex: 100,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        background: "rgb(5, 5, 5,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "7px",
          background: "white",
        }}
      >
        <h2>Criar Evento</h2>
        <App getEvents={getEvents} />
      </div>
    </div>
  );
}
