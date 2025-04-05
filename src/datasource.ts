import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "postgres", // Tipo do banco (pode ser mysql, sqlite, etc.)
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: process.env.LOCALDATABASEPASS,
    database: "stock-sync",
    synchronize: true, // Apenas para ambiente de desenvolvimento
    logging: false,
    entities: ["src/entities/*.ts"], // Caminho das entidades
    migrations: ["src/migrations/*.ts"], // Caminho das migrações
    subscribers: [],
});
