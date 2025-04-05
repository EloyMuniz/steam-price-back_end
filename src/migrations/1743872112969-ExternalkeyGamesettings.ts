import { MigrationInterface, QueryRunner } from "typeorm";

export class ExternalkeyGamesettings1743872112969 implements MigrationInterface {
    name = 'ExternalkeyGamesettings1743872112969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_settings" ADD "steam_uuid" uuid`);
        await queryRunner.query(`ALTER TABLE "game_settings" ADD CONSTRAINT "FK_4230ad9179d5efa969b7d9f9f5d" FOREIGN KEY ("steam_uuid") REFERENCES "steam_games"("steam_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_settings" DROP CONSTRAINT "FK_4230ad9179d5efa969b7d9f9f5d"`);
        await queryRunner.query(`ALTER TABLE "game_settings" DROP COLUMN "steam_uuid"`);
    }

}
