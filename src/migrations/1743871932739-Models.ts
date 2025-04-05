import { MigrationInterface, QueryRunner } from "typeorm";

export class Models1743871932739 implements MigrationInterface {
    name = 'Models1743871932739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "steam_games" ("steam_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "steam_name" character varying(252), "steam_id" integer NOT NULL, "steam_price" integer, "steam_discount_price" integer, "steam_CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "steam_UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), CONSTRAINT "PK_13f0843332b19a72025d35800cb" PRIMARY KEY ("steam_uuid"))`);
        await queryRunner.query(`CREATE TABLE "game_settings" ("game_settings_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "game_set_value" double precision NOT NULL, "game_CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "game_UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "user_uuid" uuid, CONSTRAINT "PK_ad96f6fcfbd513fc71faaaeb023" PRIMARY KEY ("game_settings_uuid"))`);
        await queryRunner.query(`CREATE TABLE "user" ("user_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" character varying(100) NOT NULL, "user_email" character varying(30) NOT NULL, "user_password" character varying(255) NOT NULL, "user_token" character varying(255) NOT NULL, "user_CreatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "user_UpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("user_email"), CONSTRAINT "PK_20ba1ec1283433fc53a5311f165" PRIMARY KEY ("user_uuid"))`);
        await queryRunner.query(`ALTER TABLE "game_settings" ADD CONSTRAINT "FK_2f0f81b45ed0e905fee6cc0ea92" FOREIGN KEY ("user_uuid") REFERENCES "user"("user_uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_settings" DROP CONSTRAINT "FK_2f0f81b45ed0e905fee6cc0ea92"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "game_settings"`);
        await queryRunner.query(`DROP TABLE "steam_games"`);
    }

}
