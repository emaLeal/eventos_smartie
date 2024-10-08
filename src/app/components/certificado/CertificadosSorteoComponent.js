"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import Template from "@/lib/template";

const CertificadosSorteosComponent = ({
  participantes,
  nombre_empresa,
  nombre_evento,
}) => {
  const [participante, setParticipante] = useState(null);
  const [cedula, setCedula] = useState();
  const [error, setError] = useState(false);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const buscarParticipante = () => {
    const buscar = participantes.find(
      (participant) => participant.cedula === cedula
    );
    if (buscar === undefined) {
      console.log("Participante no encontrado");
      setError(true);
      setParticipante(null);
      return;
    }
    setParticipante(buscar);
    setError(false);
  };

  return (
    <>
      <section className="my-24 mx-24 text-center">
        <h4 className="font-bold text-xl sm:text-3xl">
          BIENVENIDO AL REGISTRO PARA {nombre_evento}!!!, POR FAVOR INGRESA TU
          CEDULA PARA PODER DESCARGAR TU CERTIFICADO DE PARTICIPANTE
        </h4>
      </section>
      <section className="flex justify-center">
        <InputText
          placeholder="Cedula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          className="sm:w-96"
        />
        <Button
          onClick={() => buscarParticipante()}
          label="Buscar"
          icon="pi pi-search"
          text
          raised
          className="mx-2"
          size="small"
          iconPos="right"
        />
      </section>
      <Panel header="Participante Encontrado" className="my-24 mx-4">
        {participante !== null && (
          <section className="flex justify-between">
            <div>
              <span className="pi pi-user mx-2" />
              <label className="text-lg">{participante.nombre}</label>
            </div>
            <div>
              {client && (
                <PDFDownloadLink
                  document={
                    <Template
                      participante={participante}
                      nombre_evento={nombre_evento}
                      nombre_empresa={nombre_empresa}
                    />
                  }
                  fileName={`${participante.cedula}`}
                >
                  <Button
                    icon="pi pi-download"
                    raised
                    rounded
                    text
                    size="small"
                    tooltip={"Descargar Certificado"}
                    tooltipOptions={{ position: "left" }}
                  />
                </PDFDownloadLink>
              )}
            </div>
          </section>
        )}
        {error && <label>No se encontró esta cedula</label>}
      </Panel>
    </>
  );
};

export default CertificadosSorteosComponent;
