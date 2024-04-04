import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: any) {
  const data = await request.json();

  try {
    const { id, title, image, price } = data;
    console.log(data);

    const request =
      await sql`INSERT INTO bag (id, title, image, price) VALUES (${id}, ${title}, ${image}, ${price})`;

    if (!id || !title || !image || !price) {
      throw new Error(`Failed to handle post request`);
    }
  } catch (e) {
    console.error(`${e}`);
  }

  return NextResponse.json(data);
}
