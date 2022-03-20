import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1647752648306 implements MigrationInterface {
  name = 'FirstMigration1647752648306';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("userId" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
