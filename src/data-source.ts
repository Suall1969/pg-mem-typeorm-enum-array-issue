import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { newDb } from "pg-mem";

const db = newDb({ autoCreateForeignKeyIndices: true });

db.public.registerFunction({
    name: 'current_database',
    implementation: () => 'test'
})

db.public.registerFunction({
    name: 'version',
    implementation: () => 'PostgreSQL 12.2 (pg-mem)'
})

export const AppDataSource = db.adapters.createTypeormDataSource({
    type: "postgres",
    synchronize: true,
    entities: [User],
})
