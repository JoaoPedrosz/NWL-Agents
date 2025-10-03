import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { sql } from "./db/connection.ts";
import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// Rota de health check
app.get("/health", async () => {
	return { status: "OK" };
});

// Exemplo: rota que consulta o banco
app.get("/hello", async () => {
	const result = await sql`SELECT 'Hello' as message`;
	return result[0]; // retorna { message: "Hello" }
});

app.listen({ port: env.PORT }).then(() => {
	console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});
