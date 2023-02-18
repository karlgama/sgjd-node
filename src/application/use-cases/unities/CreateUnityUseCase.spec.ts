import UnityFactory from './UnityFactory';

const repository = new InMemoryUnityRepository();
describe('create unity', () => {
  it('should create a unity given valid parameters', () => {
    const unity = UnityFactory.makeWithOutID();
    const spy = jest.spyOn(repository, 'save').mockImplementation(async () => unity);

    const res = useCase.execute(unity);
    const dbres = repository.findById(res.id);

    expect(res.id).toBeTruthy();
    expect(dbres.id).toEqual(res.id);
    expect(spy).toHaveBeenCalled();
  });
});
