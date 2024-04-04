import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: any) {
  const data = await request.json();

  try {
    const { id } = data;
    console.log(data);

    const request = await sql`DELETE FROM bag WHERE id=${id}`;

    if (!id) {
      throw new Error(`Failed to handle post request`);
    }
  } catch (e) {
    console.error(`${e}`);
  }

  return NextResponse.json(data);
}
