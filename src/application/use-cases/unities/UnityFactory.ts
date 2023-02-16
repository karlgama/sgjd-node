import Factory from 'application/utils/factories/Factory';
import Unity from 'domain/entities/Unity';
import { randomInt } from 'crypto';

export default abstract class UnityFactory extends Factory<Unity> {
  public static make(): Unity {
    return new Unity({
      id: randomInt(1, 100),
      name: 'Jandira',
      code: 127,
      createdAt: new Date()
    });
  }
}
