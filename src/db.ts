import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { ArticleModel } from './models/ArticleModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'labotica',
  models: [

    UserModel,
    ArticleModel,

  ],
  logging: false
  
});

export default sequelize;