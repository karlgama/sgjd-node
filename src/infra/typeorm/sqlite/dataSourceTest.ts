import UnityModel from '@infra/typeorm/models/UnityModel';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  synchronize: true,
  logging: true,
  entities: [UnityModel],
  subscribers: [],
  migrations: []
});
