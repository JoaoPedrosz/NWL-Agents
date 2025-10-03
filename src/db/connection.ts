import postgres from "postgres";
import { env } from "../env.ts"; // ✅ CORRETO: o env.ts está em src/

export const sql = postgres(env.DATABASE_URL, { prepare: true });

// Teste simples de conexão (opcional)
const result = await sql`SELECT 'Hello' as message`;
console.log(result);
