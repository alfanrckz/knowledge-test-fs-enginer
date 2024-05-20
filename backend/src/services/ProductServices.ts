import { Repository } from "typeorm";
import cloudinary from "../libs/cloudinary";
import { createProductSchema } from "../utils/validator/product";
import { validate } from "../utils/validator/validation";
import { Product } from "../entity/Product";
import { AppDataSource } from "../data-source";

export default new (class ProductServices {
  private readonly productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);
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
})();
