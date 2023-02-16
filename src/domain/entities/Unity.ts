export interface UnityProps {
  id?: number;
  name: string;
  code: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class Unity {
  private id?: number;
  private name: string;
  private code: number;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(props: UnityProps) {
    this.id = props.id;
    this.name = props.name;
    this.code = props.code;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getCode() {
    return this.code;
  }

  public setCode(value: number) {
    this.code = value;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public getUpdatedAt() {
    return this.updatedAt;
  }
}
