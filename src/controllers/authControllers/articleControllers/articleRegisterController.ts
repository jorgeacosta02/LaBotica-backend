import { Request, Response } from "express";
import { ArticleModel } from "../../../models/ArticleModel";
import { UserModel } from "../../../models/UserModel";


const articleRegisterController = async (req: Request, res: Response) => {
    
    const {
        name,
        description,
        size,
        price,
        id,
    } = req.body;

    // validations    
    if(!name ) return res.status(400).json({msg: 'Por favor envíe nombre del producto.'});
    if(!size ) return res.status(400).json({msg: 'Por favor envíe medida del producto.'});


    // user check
    const user = await UserModel.findByPk(id);

    // if user does not exists
    if(!user){
        return res.status(400).json({msg: 'El usuario no existe.'})
    }

    // if user is not admin
    if(user.role !== 'admin'){
        return res.status(400).json({msg: 'El usuario no es administrador.'})
    }

    // if user is not active
    if(user.active !== true){
        return res.status(400).json({msg: 'El usuario no está activo.'})
    }

    // if user exists
    try {

        // Create new consortium
        const newArticle = new ArticleModel ({
            name,
            description,
            size,
            price,
        });
        
        // Save the product and put it in a variable.
        const savedArticle = await newArticle.save();

        // Send successful response to client.
        res.status(201).json(
            `El artículo ${savedArticle.name} fue creado con éxito!!`
        );
    } catch (error: any) {
        
        // Send error response to client.
        res.status(500).json({'error': error.message});
    }
}

export default articleRegisterController