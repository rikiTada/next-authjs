import { db } from "@/db";
import { users } from "@/db/schema/auth-schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    const data = await db.select().from(users);

    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
