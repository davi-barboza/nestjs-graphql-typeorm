import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { join } from 'path';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  console.log(result.error);
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrationsRun: true,
  entities: [join(__dirname + '/../../dist/**/entities/*.entity.js')],
  migrations: [join(__dirname + '/migrations/*.js')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
console.log(typeOrmConfig);
