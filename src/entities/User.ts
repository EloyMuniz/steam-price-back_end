import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { GameSettings } from "./GameSettings";
@Entity()
// Modelo de usuários, armazena informações dos usuários da aplicação
export class User {
    @PrimaryGeneratedColumn("uuid")
    user_uuid: string;
    @Column({ length: 100 })
    user_name: string

    @Column({ unique: true, length: 30 })
    user_email: string;

    @Column({ length: 255 })
    user_password: string;
    @Column({ length: 255 })
    user_token: string
    @CreateDateColumn({ type: "timestamp", precision: 6 })
    user_CreatedAt: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 6 })
    user_UpdatedAt: Date;
    @OneToMany(() => GameSettings, (game_settings: any) => game_settings.user) // Um usuário pode ter vários 'game_settings'
    game_settings: GameSettings[]

    constructor(user_uuid: string, user_CreatedAt: Date, user_UpdatedAt: Date, user_name: string, user_password: string, user_token: string, game_settings: GameSettings[]) {
        this.user_uuid = user_uuid
        this.user_name = user_name
        this.user_password = user_password
        this.user_token = user_token
        this.user_CreatedAt = user_CreatedAt
        this.user_UpdatedAt = user_UpdatedAt
        this.game_settings = game_settings
    }

}