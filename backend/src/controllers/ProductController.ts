import { Request, Response } from "express";
import ProductServices from "../services/ProductServices";

export default new (class ProductController {


    async create(req: Request, res: Response ){
        try {
         
            const loginSession = res.locals.session;
            console.log("this is loginSession",loginSession.id)
  
            const data = {
                name: req.body.name,
                price: req.body.price,
                image: req.file ? req.file.filename : req.body.image,
                description: req.body.description,
                created_by: loginSession.id
           
            };
            console.log("this is data",data)
        
            const response = await ProductServices.create(data);
            console.log("this is response",response)
            res.status(200).json({
                message: "Product post succesfully",
                data: response
            })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

})