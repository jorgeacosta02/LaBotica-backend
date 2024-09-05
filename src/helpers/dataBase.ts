import { ArticleModel } from "../models/ArticleModel";
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
            address: 'dirección1',
            cp: '111',
            city: 'ciudad1',
            province: 'prvincia1',
            // country: 'país1',
            password: '1',
            role: 'admin',
            active: true,
        },
        {
            firstName: 'nombre 2',
            lastName: 'apellido 2',
            dni: 'dni 2',
            phone: 'telefono 2',
            email: '2@yahoo.com',
            address: 'dirección2',
            cp: '222',
            city: 'ciudad2',
            province: 'prvincia2',
            // country: 'país1',
            password: '2',
            role: 'user',
            active: true,
        },
        {
            firstName: 'nombre3',
            lastName: 'apellido3',
            dni: 'dni3',
            phone: '3333',
            email: '3@yahoo.com',
            address: 'dirección3',
            cp: '333',
            city: 'ciudad3',
            province: 'prvincia3',
            // country: 'país1',
            password: '3',
            role: 'user',
            active: true,
        },
        {
            firstName: 'nombre 4',
            lastName: 'apellido 4',
            dni: 'dni 4',
            phone: '4444',
            email: '4@yahoo.com',
            address: 'dirección4',
            cp: '444',
            city: 'ciudad4',
            province: 'prvincia4',
            // country: 'país1',
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


    // Articles
    const articles = [
        {
            name: 'Artículo 1',
            description: 'descripción 1',
            size: '100grs',
            price: '1000',
            stock: 100,
            active: true,
        },
        {
            name: 'Artículo 2',
            description: 'descripción 2',
            size: '200grs',
            price: '2000',
            stock: 200,
            active: true,
        },
        {
            name: 'Artículo 3',
            description: 'descripción 3',
            size: '300grs',
            price: '3000',
            stock: 300,
            active: true,
        },
        {
            name: 'Artículo 4',
            description: 'descripción 4',
            size: '400grs',
            price: '4000',
            stock: 400,
            active: true,
        },
        {
            name: 'Artículo 5',
            description: 'descripción 5',
            size: '500grs',
            price: '5000',
            stock: 500,
            active: true,
        },
        {
            name: 'Artículo 6',
            description: 'descripción 6',
            size: '600grs',
            price: '6000',
            stock: 600,
            active: true,
        },
    ]

    const insertedProducts:any = await ArticleModel.bulkCreate(articles);
    
    console.log(insertedProducts);


};

export default dataBase;
