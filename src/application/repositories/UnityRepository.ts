import Unity from '../../domain/entities/Unity';

export default interface UnityRepository {
  save(unity: Unity): Promise<Unity>;
}
