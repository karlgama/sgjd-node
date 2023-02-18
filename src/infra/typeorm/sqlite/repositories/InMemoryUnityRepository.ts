import { Repository } from 'typeorm';
import UnityRepository from '../../../../application/repositories/UnityRepository';
import Unity from '../../../../domain/entities/Unity';
import { AppDataSource } from '../dataSourceTest';
import UnityModel from '@infra/typeorm/models/UnityModel';
import UnityMapper from '@infra/typeorm/mappers/UnityMapper';

export default class InMemoryUnityRepository implements UnityRepository {
  private repo: Repository<UnityModel>;

  constructor() {
    this.repo = AppDataSource.getRepository(UnityModel);
  }

  async save(unity: Unity): Promise<Unity> {
    const model = UnityMapper.toModel(unity);
    const entity = await this.repo.save(model);
    return UnityMapper.toEntity(entity);
  }
}
