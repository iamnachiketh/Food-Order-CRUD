import Joi from 'joi';

export const orderValidation = Joi.object({

    orderId: Joi.string().required(),

    customerId: Joi.string().required(),

    status: Joi.string().required(),

    totalAmount: Joi.number().required(),

    items: Joi.array().items(Joi.object({

        productId: Joi.string().required(),

        quantity: Joi.number().required(),

        price: Joi.number().required()

    }))

})