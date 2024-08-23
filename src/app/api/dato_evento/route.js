import { NextResponse } from "next/server";

export async function POST(req, params) {
  const body = await req.json();
  const formatedBody = JSON.stringify({
    nombre: body.nombre,
    cedula: body.cedula,
    cargo: body.recibo,
    correo: body.correo,
    evento_id: body.evento_id,
  });
  const url = "https://admin.smartie.com.co/api/participante";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: formatedBody,
    });
    if (res.ok) {
      console.log("OK :D");
    }
    return NextResponse.json({ message: "Agregado" }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
