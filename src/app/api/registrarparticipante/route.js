import { NextResponse } from "next/server";

export async function PUT(req) {
  const body = await req.json();
  console.log(body);
  try {
    const res = await fetch("http://localhost:3000/api/registrarparticipante", {
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw "error";
    }
    return NextResponse.json(
      { message: "Satisfactoriamente actualizado" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
