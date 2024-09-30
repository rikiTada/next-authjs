"use server";
import { db } from "@/db";
import { users } from "@/db/schema";

export const insertData = async () => {
  await db.insert(users).values({
    name: "hoge",
    email: "hoge",
    password: "hoge",
  });
};
