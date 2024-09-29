import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

const schemaBase = {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at").defaultNow().notNull(),
};

export const users = pgTable(
  "users",
  {
    ...schemaBase,
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);
