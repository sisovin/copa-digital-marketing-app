import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddServiceAndLocationFilters20220101000000 implements MigrationInterface {
  name = 'AddServiceAndLocationFilters20220101000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "agency"
      ADD COLUMN "service" character varying NOT NULL,
      ADD COLUMN "location" character varying NOT NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "service"
      ADD COLUMN "service" character varying NOT NULL,
      ADD COLUMN "location" character varying NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "agency"
      DROP COLUMN "service",
      DROP COLUMN "location"
    `);

    await queryRunner.query(`
      ALTER TABLE "service"
      DROP COLUMN "service",
      DROP COLUMN "location"
    `);
  }
}
