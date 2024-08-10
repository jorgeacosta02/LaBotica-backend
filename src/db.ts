import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { ProductModel } from './models/ProductModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'labotica',
  models: [

    UserModel,
    ProductModel,

  ],
  logging: false
  
});

export default sequelize;