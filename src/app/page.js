import Link from "next/link";
import logo from "/public/logo.png";
import Image from "next/image";
import ButtonComponent from "./components/preguntas/ButtonComponent";

export default function Home() {
  return (
    <main>
      <div className="w-full flex justify-between h-20">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <Link href={'/participar'}>
          <ButtonComponent />
        </Link>
      </div>
      <div className="flex justify-center my-40">
        <span className="font-bold text-lg">
          Participa y gestiona los distintos eventos que tenemos disponibles
        </span>
      </div>
    </main>
  );
}
