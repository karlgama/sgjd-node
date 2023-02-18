import Unity from '@domain/entities/Unity';
import UnityModel from '../models/UnityModel';

export default class UnityMapper {
  static toEntity(model: UnityModel): Unity | PromiseLike<Unity> {
    const entity = new Unity({
      id: model.id,
      code: model.code,
      name: model.name,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    });

    return entity;
  }

  public static toModel(unity: Unity): UnityModel {
    const model = new UnityModel();

    model.id = unity.id;
    model.code = unity.code;
    model.name = unity.name;
    model.createdAt = unity.createdAt;
    model.updatedAt = unity.updatedAt;

    return model;
  }
}
