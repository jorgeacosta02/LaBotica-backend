import { Router } from 'express';
import userRegisterController from '../controllers/authControllers/userControllers/userRegisterController';
import userLogInController from '../controllers/authControllers/userControllers/userLoginController';
import userLogOutController from '../controllers/authControllers/userControllers/userLogoutController';
import userProfileController from '../controllers/authControllers/userControllers/userProfileController';
import productRegisterController from '../controllers/authControllers/productControllers/productRegisterController';
import { userAuthRequired } from '../middlewares/userValidate.token'



const authRoutes = Router();

// UserRoutes
authRoutes.post('/user-register', userRegisterController);
authRoutes.post('/user-login', userLogInController);
authRoutes.post('/user-logout', userLogOutController);
authRoutes.get('/user-profile', userAuthRequired, userProfileController);

// ProductRoutes
authRoutes.post('/product-register', productRegisterController);


export default authRoutes