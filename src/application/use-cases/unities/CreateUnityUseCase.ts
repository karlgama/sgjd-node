import UnityRepository from '@application/repositories/UnityRepository';
import Unity from '@domain/entities/Unity';

export interface CreateUnityRequest {
  name: string;
  code: number;
}
export default class CreateUnityUseCase {
  constructor(private readonly repo: UnityRepository) {}

  public execute(request: CreateUnityRequest): Promise<Unity> {
    const unity = new Unity(request);
    return this.repo.save(unity);
  }
}
