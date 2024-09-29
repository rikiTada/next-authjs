import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://user:password@host:port/db",
});

export const db = drizzle(pool);
