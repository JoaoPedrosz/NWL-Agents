import { env } from "node:process";
import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", async () => {
	return { status: "OK" };
});

app.listen({ port: env.PORT });
