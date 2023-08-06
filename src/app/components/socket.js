"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3060");

const SocketComponent = () => {
  const [lobbyId, setLobbyId] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const entrarLobby = () => {
    socket.emit("joinLobby", { lobbyId, nombre, rol: "jugador" });
  };

  const dejarLobby = () => {
    const user = JSON.parse(localStorage.getItem("socketUser"));
    localStorage.removeItem("socketUser");
    socket.emit("leaveLobby", user);
    setSuccess(false);
    setLobbyId("");
    setNombre("");
  };

  socket.on("joinedLobby", (user) => {
    if (user === "No encontrado") {
      if (localStorage.getItem("socketUser")) {
        localStorage.removeItem("socketUser");
      } else {
        setError("Error, no lobby encontrado");
      }
    } else {
      setSuccess(true);
      localStorage.setItem("socketUser", JSON.stringify(user));
    }
  });

  useEffect(() => {
    if (localStorage.getItem("socketUser")) {
      const user = JSON.parse(localStorage.getItem("socketUser"));
      console.log(user);
      socket.emit("leaveLobby", user);

      socket.emit("joinLobby", user);
    }
  }, []);

  return (
    <>
      <InputText
        value={lobbyId}
        onChange={(e) => {
          setLobbyId(e.target.value);
        }}
        placeholder="LobbyID"
      />
      <InputText
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
        placeholder="Nombre"
      />
      <Button label="Entrar" onClick={entrarLobby} />
      <Button label="Salir" onClick={dejarLobby} />
      {error && <label>{error}</label>}
      {success && <label>Entraste al lobby {lobbyId}</label>}
    </>
  );
};

export default SocketComponent;
