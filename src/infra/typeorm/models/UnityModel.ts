import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'unities' })
export default class UnityModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id?: number;

  @Column('varchar', { length: 100, name: 'name' })
  private _name: string;

  @Column({ name: 'code' })
  private _code: number;

  @CreateDateColumn({ name: 'created_at' })
  private _createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private _updatedAt?: Date | undefined;

  public get updatedAt(): Date | undefined {
    return this._updatedAt;
  }
  public set updatedAt(value: Date | undefined) {
    this._updatedAt = value;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get code(): number {
    return this._code;
  }
  public set code(value: number) {
    this._code = value;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }
}
