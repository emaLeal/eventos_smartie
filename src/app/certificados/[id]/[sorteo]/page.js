import CertificadosSorteoComponent from "@/app/components/certificado/CertificadosSorteoComponent";
import Link from "next/link";
import logo from "/public/logo.png";
import Image from "next/image";
import ButtonComponent from "@/app/components/preguntas/ButtonComponent";

async function getDatosEvento(id) {
  const url = `https://admin.smartie.com.co/api/eventos/${id}`;
  const res = await fetch(url, { next: { revalidate: 15 } });
  if (res.ok) {
    const json = await res.json();
    return json.data;
  }
}

async function getParticipantes(sorteo) {
  const url = `https://admin.smartie.com.co/api/sorteos_ex/${sorteo}`;
  const res = await fetch(url, { next: { revalidate: 15 } });
  if (res.ok) {
    const json = await res.json();
    return json;
  }
}

export default async function CertificadoSorteoPage({ params }) {
  const { id, sorteo } = params;
  const data = await getParticipantes(sorteo);
  const { nombre_evento, empresa } = await getDatosEvento(id);

  return (
    <>
      <div className="w-full flex justify-between h-20">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <Link href={"/participar"}>
          <ButtonComponent />
        </Link>
      </div>
      <CertificadosSorteoComponent
        nombre_evento={nombre_evento}
        nombre_empresa={empresa}
        participantes={data.data}
      />
    </>
  );
}
