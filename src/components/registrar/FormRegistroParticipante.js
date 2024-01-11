"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const initialForm = {
  nombre: "",
  cedula: "",
  recibo: "",
  correo: "",
};

const FormRegistro = () => {
  const [form, setForm] = useState(initialForm);

  const onSubmit = async () => {
    const url = ``;
    const res = await fetch(url);
    if (res.ok) {
    }
  };

  return (
    <form className="p-2" onSubmit={onSubmit} method="POST">
      <div className="field my-4">
        <span className="p-float-label">
          <InputText
            value={form.nombre}
            name="nombre"
            placeholder="Ingresa tu Nombre"
            className="w-full"
          />
          <label htmlFor="nombre">Nombre*</label>
        </span>
      </div>
      <div className="field my-4">
        <span className="p-float-label">
          <InputText
            value={form.cedula}
            name="cedula"
            placeholder="Ingresa tu Cedula"
            className="w-full"
          />
          <label htmlFor="cedula">Cedula*</label>
        </span>
      </div>
      <div className="field my-4">
        <span className="p-float-label">
          <InputText
            value={form.recibo}
            name="recibo"
            placeholder="Ingresa el recibo de tu factura"
            className="w-full"
          />
          <label htmlFor="recibo">Recibo de factura*</label>
        </span>
      </div>
      <div className="field my-4">
        <span className="p-float-label">
          <InputText
            value={form.correo}
            name="correo"
            placeholder="Ingresa tu Correo"
            className="w-full"
          />
          <label htmlFor="correo">Correo*</label>
        </span>
      </div>
      <div className="field my-4 flex justify-end">
        <Button
          type="submit"
          severity="success"
          raised
          size="large"
          rounded
          label="Registrate"
        />
      </div>
    </form>
  );
};

export default FormRegistro;
