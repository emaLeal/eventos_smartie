import Link from "next/link";
import logo from "/public/logo.png";
import Image from "next/image";
import ButtonComponent from "./components/preguntas/ButtonComponent";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-blue-700 h-20">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex justify-center my-40">
        <Link href={'/participar'}>
          <ButtonComponent />
        </Link>
      </div>
    </main>
  );
}
