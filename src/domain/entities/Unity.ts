export interface UnityProps {
  id?: number;
  name: string;
  code: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class Unity {
  private _id?: number;
  private _name: string;
  private _code: number;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor(props: UnityProps) {
    this._id = props.id;
    this._name = props.name;
    this._code = props.code;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  public get id() {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name() {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get code() {
    return this._code;
  }

  public set code(value: number) {
    this._code = value;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get updatedAt() {
    return this._updatedAt;
  }
}
