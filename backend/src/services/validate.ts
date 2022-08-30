import joi = require('joi');
import { IUser } from '../model/user';

export function userSignUpInput(user: IUser) {
    const schema = joi.object({
        displayName: joi.string().min(3).required(),
        password: joi.string().min(6).required(),
        email: joi.string().email().required(),
    });
    return schema.validate(user);
}

export function userSignInput(user: IUser) {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    });
    return schema.validate(user);
}

export function Token(token: any) {
    const schema = joi.object({
        authorization: joi.string()
    });
    return schema.validate(token);
}

export function googleSignInput(user: IUser) {
    const schema = joi.object({
        displayName: joi.string().min(3).required(),
        email: joi.string().email().required(),
        googleAuthToken: joi.string().required()
    });
    return schema.validate(user);
}