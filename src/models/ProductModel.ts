
import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';

  
  @Table({ tableName: 'product' })
  export class ProductModel extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
    })
    id!: any;

    @Column
    name!: string;
 
    @Column
    description!: string;

    @Column
    unit!: string;

    @Column
    price!: string;

    @Column
    stock!: DataType.INT

    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Valor por defecto para la columna 'active'
    })
    active!: boolean;


  }
  
  
  