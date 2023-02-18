import InMemoryUnityRepository from '@infra/typeorm/sqlite/repositories/InMemoryUnityRepository';
import UnityFactory from './UnityFactory';
import CreateUnityUseCase from './CreateUnityUseCase';

const repository = new InMemoryUnityRepository();
const useCase = new CreateUnityUseCase(repository);

describe('create unity', () => {
  it('should create a unity given valid parameters', async () => {
    const unity = UnityFactory.makeWithOutID();
    // const spy = jest.spyOn(repository, 'save').mockImplementation(async () => unity);

    const res = await useCase.execute(unity);
    // const dbres = repository.findById(res.id);
    console.log(res.id);
    expect(res.id).toBeTruthy();
    // expect(dbres.id).toEqual(res.id);
  });
});
