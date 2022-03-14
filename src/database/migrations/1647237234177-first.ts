import {MigrationInterface, QueryRunner} from "typeorm";

export class first1647237234177 implements MigrationInterface {
    name = 'first1647237234177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("produtoId" character varying NOT NULL, "valorUnitario" integer NOT NULL, CONSTRAINT "PK_340d809e61b8c6a829b534c3a04" PRIMARY KEY ("produtoId"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
