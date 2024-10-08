
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
  export class ArticleModel extends Model {
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
    size!: string;

    @Column
    price!: string;

    @Column
    stock!: number;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Valor por defecto para la columna 'active'
    })
    active!: boolean;


  }
  
  
  