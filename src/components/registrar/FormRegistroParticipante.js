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

const FormRegistro = ({ id_evento }) => {
  const [form, setForm] = useState(initialForm);

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = `/api/dato_evento`;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ ...form, evento_id: id_evento }),
    });
    if (res.ok) {
      console.log("suces");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label htmlFor="recibo">
            Recibo de factura(si no aplica escribe tu cargo)*
          </label>
        </span>
      </div>
      <div className="field my-4">
        <span className="p-float-label">
          <InputText
            value={form.correo}
            name="correo"
            placeholder="Ingresa tu Correo"
            className="w-full"
            onChange={handleChange}
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
