import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost",
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({
        type: "enum",
        enum: UserRole,
        array: true
    })
    roles: UserRole[]

}
