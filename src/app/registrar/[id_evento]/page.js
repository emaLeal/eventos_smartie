import FormRegistroParticipante from "@/components/registrar/FormRegistroParticipante";
import { redirect } from "next/navigation";
import logo from "/public/logo.png";
import Image from "next/image";

async function getData(id) {
  const url = `http://localhost:8080/api/dato_evento/${id}`;

  const res = await fetch(url);

  if (res.status === 404) {
    redirect("/");
  }

  if (res.ok) {
    const json = await res.json();
    return json;
  }
}

export default async function RegistrarPage({ params }) {
  const { id_evento } = params;
  const dataEvento = await getData(id_evento);
  return (
    <>
      <div className="absolute w-full h-24">
        <div className="flex justify-between">
          <div>
            <Image src={logo} width={100} height={50} />
          </div>
          <div>
            <h1 className="text-center font-bold text-lg">
              {dataEvento.data.data.nombre_evento}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen p-8 px-4">
        <span className="font-bold text-lg text-center">
          Rellena este formulario para poder registrarte en el sorteo
        </span>
        <FormRegistroParticipante id_evento={id_evento}/>
      </div>
    </>
  );
}
