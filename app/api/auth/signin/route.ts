import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: any) {
  const data = await request.json();

  try {
    const { email, pass } = data;
    console.log(data);
    if (!email || !pass) {
      throw new Error(`Failed to handle post request`);
    }

    const users = await sql`SELECT * FROM users WHERE email=${email}`;
    const user = users.rows;

    if (user.length == 0)
      throw new Error("No user with that email, try signing up");
    else if (user[0]?.pass === pass) {
      console.log("User successfully logged in");
    } else if (user[0]?.pass !== pass) {
      throw new Error("Password incorrect");
    }
  } catch (e) {
    console.error(`${e}`);
  }
  return NextResponse.json(data);
}
