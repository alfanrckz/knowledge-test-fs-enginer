import joi = require("joi");

export const createProductSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().required(),
    description: joi.string().required(),
    created_by: joi.number().required(),

});

export const updateProductSchema = joi.object({
    name: joi.string().optional(),
    price: joi.number().optional(),
    image: joi.string().optional(),
    description: joi.string().optional(),
    updated_at: joi.date().optional()
})