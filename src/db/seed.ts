import { db } from "@/db";
import { users } from "@/db/schema";
import "dotenv/config";

async function main() {
  const insertResult = await db
    .insert(users)
    .values({
      name: "John Doe",
      email: "john@example.com",
      password: "password",
    })
    .returning();
  console.log("Inserted user:", insertResult);

  // ユーザーの取得
  const allUsers = await db.select().from(users);
  console.log("All users:", allUsers);
  // await client.end();
}

main().catch(console.error);
