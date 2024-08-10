import { MinuteModel } from "../models/MinuteModel";
import { ProductModel } from "../models/ProductModel";
import { UserModel } from "../models/UserModel";
import bcrypt from 'bcrypt';

const dataBase = async () => {

    // Users
    const users = [
        {
            firstName: 'admin',
            lastName: 'admin',
            dni: '1',
            phone: '2646730581',
            email: '1@yahoo.com',
            password: '1',
            role: 'admin',
            active: true,
        },
        {
            firstName: '2',
            lastName: '2',
            dni: '22',
            phone: '2222',
            email: '2@yahoo.com',
            password: '2',
            role: 'user',
            active: true,
        },
        {
            firstName: '3',
            lastName: '3',
            dni: '33',
            phone: '3333',
            email: '3@yahoo.com',
            password: '3',
            role: 'user',
            active: true,
        },
        {
            firstName: '4',
            lastName: '4',
            dni: '44',
            phone: '4444',
            email: '4@yahoo.com',
            password: '4',
            role: 'user',
            active: true,
        },
    ]


    const hashedUsers = await Promise.all(users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        return {
            ...user,
            password: hash
        };
    }));

    const insertedUsers:any = await UserModel.bulkCreate(hashedUsers);
    
    console.log(insertedUsers);


    // Products
    const products = [
        {
            name: 'Producto 1',
            description: 'descripción 1',
            unit: 'grs.',
            price: '1000',
            stock: 100,
            active: true,
        },
        {
            name: 'Producto 2',
            description: 'descripción 2',
            unit: 'grs.',
            price: '2000',
            stock: 200,
            active: true,
        },
    ]

    const insertedProducts:any = await ProductModel.bulkCreate(products);
    
    console.log(insertedProducts);


};

export default dataBase;
