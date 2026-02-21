import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  "postgresql://neondb_owner:npg_vxcNX7DlkV6C@ep-sparkling-forest-aioekilk-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
);

const db = drizzle(sql);
