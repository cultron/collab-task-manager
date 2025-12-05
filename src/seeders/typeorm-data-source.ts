import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

const devPGOptions = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  // SSL required for Neon PostgreSQL
  ssl: /^true$/i.test(process.env.DATABASE_SSL || '')
    ? { rejectUnauthorized: false }
    : false,
};

const prodPGOptions = {
  url: process.env.DATABASE_URL,
  // SSL for production (DATABASE_URL includes sslmode but TypeORM needs this too)
  ssl: { rejectUnauthorized: false },
};

let options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  database: process.env.DATABASE_NAME || 'test',
  entities: ['src/**/**/*.entity.{ts,js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  seeds: ['src/seeders/*.seeder{.ts,.js}'],
  schema: process.env.DATABASE_SCHEMA,
};

if (process.env.NODE_ENV !== 'production') {
  options = { ...options, ...devPGOptions };
} else {
  options = { ...options, ...prodPGOptions };
}

const dataSource = new DataSource(options);
export default dataSource;
