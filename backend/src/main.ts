import type { NestFastifyApplication } from "@nestjs/platform-fastify"
import process from "node:process"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule)
    await app.listen(process.env.PORT || 3000)
}
bootstrap()
