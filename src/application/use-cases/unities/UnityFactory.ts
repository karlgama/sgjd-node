import { randomInt } from 'crypto';
import Unity from '../../../domain/entities/Unity';
import Factory from '../../utils/factories/Factory';

export default abstract class UnityFactory extends Factory<Unity> {
  public static make(): Unity {
    return new Unity({
      id: randomInt(1, 100),
      name: 'Jandira',
      code: 127,
      createdAt: new Date()
    });
  }

  public static makeWithOutID(): Unity {
    return new Unity({
      name: 'Jandira',
      code: 127,
      createdAt: new Date()
    });
  }
}
