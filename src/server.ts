import { fastify } from "fastify"
import {
    serializerCompiler,
    validatorCompiler,
    ZodTypeProvider,
} from "fastify-type-provider-zod"   
import { fastifyCors} from "@fastify/cors"

const app = fastify()

app.register(fastifyCors, {
    origin: "http://localhost:5173",
})  