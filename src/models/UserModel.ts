import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';


@Table({ tableName: 'users' })
export class UserModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dni!: string;

  @Column
  phone!: string;

  @Column
  email!: string;

  @Column
  address!: string;

  @Column
  cp!: string;

  @Column
  city!: string;

  @Column
  country!: string;

  @Column
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user',
  })
  role!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active!: boolean;
}
