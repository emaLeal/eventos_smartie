import Image from "next/image";
import { Button } from "primereact/button";
import React from "react";

const IngresadoLobby = ({ dejarLobby, user }) => {
  return (
    <>
      <Button
        onClick={dejarLobby}
        label="Dejar Lobby"
        className="my-2 mx-2"
        severity="help"
      />
      {user !== null && (
        <>
          <div className="h-96 flex justify-center items-center flex-column">
            <Image
              width={200}
              height={200}
              src={
                user.foto === "/user.png"
                  ? user.foto
                  : `http://localhost:3000/api/foto${user.foto}`
              }
              alt="Foto de usuario"
            />
            <label className="font-bold text-lg">{user.nombre}</label>
            <br />
            <label>Bienvenido/a, por favor espera que el sorteo inicie</label>
          </div>
        </>
      )}
    </>
  );
};

export default IngresadoLobby;
