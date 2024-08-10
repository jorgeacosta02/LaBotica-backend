import { Request, Response } from "express";
import { ProductModel } from "../../../models/ProductModel";
import { UserModel } from "../../../models/UserModel";


const productRegisterController = async (req: Request, res: Response) => {
    
    const {
        name,
        description,
        unit,
        price,
        id,
    } = req.body;

    // validations    
    if(!name ) return res.status(400).json({msg: 'Por favor envíe nombre del producto.'});
    if(!unit ) return res.status(400).json({msg: 'Por favor envíe unidad de medida del producto.'});


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
        const newProduct = new ProductModel ({
            name,
            description,
            unit,
            price,
        });
        
        // Save the product and put it in a variable.
        const savedProduct = await newProduct.save();

        // Send successful response to client.
        res.status(201).json(
            `El proyecto ${savedProduct.name} fue creado con éxito!!`
        );
    } catch (error: any) {
        
        // Send error response to client.
        res.status(500).json({'error': error.message});
    }
}

export default productRegisterController