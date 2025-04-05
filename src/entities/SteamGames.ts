import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { GameSettings } from "./GameSettings";
@Entity()
//Armazena os jogos e seus respectivos preços provenientes da api pública da Steam
export class SteamGames {
    @PrimaryGeneratedColumn("uuid")
    steam_uuid: string;

    @Column({ type: "varchar", length: 252, nullable: true })
    steam_name?: string;

    @Column({ type: "int" })
    steam_id: number;

    @Column({ type: "int", nullable: true })
    steam_price?: number;

    @Column({ type: "int", nullable: true })
    steam_discount_price?: number;
    @CreateDateColumn({ type: "timestamp", precision: 6 })
    steam_CreatedAt: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 6 })
    steam_UpdatedAt: Date;
    @OneToMany(() => GameSettings, (game_settings: any) => game_settings.steam_games) // Um usuário pode ter vários 'game_settings'
    game_settings: GameSettings[]
    constructor(steam_uuid: string, steam_name: string, steam_id: number, steam_price: number, steam_discount_prince: number, steam_CreatedAt: Date, steam_UpdateAt: Date) {
        this.steam_uuid = steam_uuid;
        this.steam_name = steam_name;
        this.steam_id = steam_id;
        this.steam_price = steam_price;
        this.steam_discount_price = steam_discount_prince;
        this.steam_CreatedAt = steam_CreatedAt;
        this.steam_UpdatedAt = steam_UpdateAt;
    }

}