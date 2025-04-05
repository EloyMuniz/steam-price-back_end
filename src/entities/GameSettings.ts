import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { SteamGames } from "./SteamGames";
@Entity()
//Armazena os valores dos jogos que o usuário escolheu
export class GameSettings {
    @PrimaryGeneratedColumn("uuid")
    game_settings_uuid: string
    @Column({ type: 'float' })
    game_set_value: number
    @CreateDateColumn({ type: "timestamp", precision: 6 })
    game_CreatedAt: Date;
    @UpdateDateColumn({ type: "timestamp", precision: 6 })
    game_UpdatedAt: Date;
    @ManyToOne(() => User, (user) => user.game_settings, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_uuid" })
    user: User;
    @ManyToOne(() => SteamGames, (steam_games) => steam_games.game_settings, { onDelete: "CASCADE" })
    @JoinColumn({ name: "steam_uuid" })
    steam_games: SteamGames;
    constructor(game_settings_uuid: string, user: User, game_set_value: number, game_CreatedAt: Date, game_UpdatedAt: Date, steam_games: SteamGames) {
        this.game_settings_uuid = game_settings_uuid
        this.game_set_value = game_set_value
        this.game_CreatedAt = game_CreatedAt
        this.game_UpdatedAt = game_UpdatedAt
        this.user = user;
        this.steam_games = steam_games
    }
}

