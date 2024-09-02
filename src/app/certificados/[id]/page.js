import CertificadosComponent from "@/app/components/certificado/CertificadosComponent";
import Link from "next/link";
import logo from "/public/logo.png";
import Image from "next/image";
import ButtonComponent from "@/components/preguntas/ButtonComponent";

async function getParticipantesData(id) {
  const url = `https://admin.smartie.com.co/api/participante/${id}`;
  const res = await fetch(url, { next: { revalidate: 15 } });
  if (res.ok) {
    const json = await res.json();

    return json;
  }
}

async function getEventoData(id) {
  const url = `https://admin.smartie.com.co/api/eventos/${id}`;
  const res = await fetch(url, { next: { revalidate: 15 } });
  if (res.ok) {
    const json = await res.json();

    return json.data;
  }
}

export default async function CertificadosPage({ params }) {
  const { id } = params;
  const data = await getParticipantesData(id);
  const { nombre_evento, empresa, foto_evento } = await getEventoData(id);
  const formatedUrlPhoto = foto_evento.replaceAll(" ", "%20")
  const urlImage = `https://admin.smartie.com.co/api/foto${formatedUrlPhoto}`
  console.log(urlImage)
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${urlImage})`,
          backgroundRepeat: 'no-repeat,',
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >
        <div className="w-full flex justify-between h-20">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <Link href={"/participar"}>
            <ButtonComponent />
          </Link>
        </div>
        <CertificadosComponent
          participantes={data.data}
          nombre_empresa={empresa}
          nombre_evento={nombre_evento}
        />
      </div>
    </>
  );
}
