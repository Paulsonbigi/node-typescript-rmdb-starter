import Joi from "joi";
// const roles = require("../utils/role.enum")

// const UserValidator = {};

const pattern = "^(?=[0-9a-zA-Z#@\$\?]{8,}$)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).*";

    export const  createUserValidator = Joi.object().keys({
        username: Joi.string().trim().required().messages({
            'string.base': `"username" should be a type of 'text'`,
            'any.required': `"username" is a required field`,
        }),

        firstName: Joi.string().trim().required().messages({
            'string.base': `"firstName" should be a type of 'text'`,
            'any.required': `"firstName" is a required field`,
        }),

        lastName: Joi.string().trim().required().messages({
            'string.base': `"lastName" should be a type of 'text'`,
            'any.required': `"lastName" is a required field`,
        }),

        role: Joi.string().trim().required().valid("admin", "user").messages({
            'string.base': `"role" should be a type of 'text'`,
            'any.required': `"role" is a required field`,
        }),

        phoneNumber: Joi.string().length(11).alphanum().required(),

        email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
            'string.base': `"email" should be a type of 'email'`,
            'any.required': `"email" is a required field`,
        }),

        password: Joi.string().trim().regex(RegExp(pattern)).min(8).max(20).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'any.required': `"password" is a required field`,
        }),

        profilePicture: Joi.string().optional().messages({
            'string.base': `"Profile picture" should be a type of 'text'`,
            'any.required': `"Profile picture" is a required field`,
        }),

    });

    // public loginUserValidator = Joi.object().keys({
    //     username: Joi.string().trim().optional().messages({
    //         'string.base': `"username" should be a type of 'text'`,
    //         'any.required': `"username" is a required field`,
    //     }),

    //     email: Joi.string().trim().optional().messages({
    //         'string.base': `"username" should be a type of 'text'`,
    //         'any.required': `"username" is a required field`,
    //     }),

    //     password: Joi.string().trim().messages({
    //         'string.base': `"password" should be a type of 'text'`,
    //         'any.required': `"password" is a required field`,
    //     }),
    // });

    // public editUserValidator = Joi.object().keys({
    //     username: Joi.string().trim().required().messages({
    //         'string.base': `"username" should be a type of 'text'`,
    //         'any.required': `"username" is a required field`,
    //     }),

    //     firstName: Joi.string().trim().required().messages({
    //         'string.base': `"firstName" should be a type of 'text'`,
    //         'any.required': `"firstName" is a required field`,
    //     }),

    //     lastName: Joi.string().trim().required().messages({
    //         'string.base': `"lastName" should be a type of 'text'`,
    //         'any.required': `"lastName" is a required field`,
    //     }),

    //     role: Joi.string().trim().required().valid("admin", "user").messages({
    //         'string.base': `"role" should be a type of 'text'`,
    //         'any.required': `"role" is a required field`,
    //     }),

    //     phoneNumber: Joi.string().trim().length(11).required().messages({
    //         'string.base': `"phoneNumber" should be a type of 'text'`,
    //         'any.required': `"phoneNumber" is a required field`,
    //     }),

    //     email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
    //         'string.base': `"email" should be a type of 'email'`,
    //         'any.required': `"email" is a required field`,
    //     }),

    //     address: Joi.string().trim().required().messages({
    //         'string.base': `"address" should be a type of 'text'`,
    //         'any.required': `"address" is a required field`,
    //     }),

    //     occupation: Joi.string().trim().required().messages({
    //         'string.base': `"occupation" should be a type of 'text'`,
    //         'any.required': `"occupation" is a required field`,
    //     }),
        
    //     password: Joi.string().trim().regex(RegExp(pattern)).min(8).max(20).required().messages({
    //         'string.base': `"password" should be a type of 'text'`,
    //         'any.required': `"password" is a required field`,
    //     }),

    //     confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    //         'string.base': `"confirmPassword" should match password'`,
    //         'any.required': `"confirmPassword" is a required field`,
    //     }),

    // });