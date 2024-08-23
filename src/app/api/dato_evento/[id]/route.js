import { NextResponse } from "next/server";

export async function GET(req, params) {
  const { id } = params.params;
  const url = `https://admin.smartie.com.co/api/eventos/${id}`;
  try {
    const res = await fetch(url);

    if (res.ok) {
      const json = await res.json();
      
      if (Object.keys(json).length === 0) {
        return NextResponse.json({ message: "No Encontrado" }, { status: 404 });
      }

      return NextResponse.json({ data: json }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
