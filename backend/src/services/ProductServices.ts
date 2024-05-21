import { Repository } from "typeorm";
import cloudinary from "../libs/cloudinary";
import { createProductSchema, updateProductSchema } from "../utils/validator/product";
import { validate } from "../utils/validator/validation";
import { Product } from "../entity/Product";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export default new (class ProductServices {
  private readonly productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async getProducts(){
    return this.productRepository.find({

      order: {
        id: "DESC"
      },
      select: 
      {
        id: true,
          name: true,
          description: true,
          image: true,
          price: true,
      }
    })
  }


  async create(data: any) {
    const isValid = validate(createProductSchema, data);
    cloudinary.config();
    const valid = {
      name: isValid.name,
      price: isValid.price,
      description: isValid.description,
      created_by: isValid.created_by,
      image: isValid.image
        ? (await cloudinary.upload(isValid.image)).secure_url
        : undefined,
    };
    const response = await this.productRepository.save(valid);
    return {
      message: "Product created successfully",
      data: response,
    };
  }

  async updateProduct(data: any, id: any) {
    const isValid = validate(updateProductSchema, data);
    cloudinary.config();

    let valid: any = {
        name: isValid.name,
        price: isValid.price,
        description: isValid.description,
        updated_at: isValid.updated_at
    };

    if (isValid.image) {
        const upfile = await cloudinary.upload(isValid.image);
        valid.image = upfile.secure_url;
    }

    // Filter out undefined properties
    valid = Object.fromEntries(Object.entries(valid).filter(([_, v]) => v != null));

    if (!valid.name) {
        throw new Error("Product name is required");
    }

    await this.productRepository.update({ id: id.id }, valid);

    return {
        message: "Product updated successfully",
        data: valid,
    };
}

async deleteProduct(id){
  const checkProduct = await this.productRepository.countBy(id);
  if(checkProduct === 0) throw new Error("Product not found");

  const response = await this.productRepository.delete(id);
  return {
    message: "Product deleted successfully",
  }
}


})();
