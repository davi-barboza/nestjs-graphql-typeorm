import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { join } from 'path';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  /* do nothing */
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  dropSchema: false,
  entities: [join(__dirname + '/../../dist/**/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname + '/migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
