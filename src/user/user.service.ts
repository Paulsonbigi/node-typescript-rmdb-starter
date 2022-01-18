import { Request } from "express";
import { getManager } from "typeorm";
import * as bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken";
import { User } from "../entity/user.entity";

class UserService {
    public hashPassword = async (req: Request) => {
        return bcrypt.hash(req.body.password, 12);
    };

    public comparePassword = async (candidate: string, savedPassword: string) => {
        return bcrypt.compare(candidate, savedPassword);
    };

    public generateJwt = async (user: object) => {
        return Jwt.sign(user, process.env.JWT_EXPIREIN || '1d', {
            algorithm: "HS256",
            expiresIn: process.env.JWT_SECRET! || 'secret'
        })
    }

    public userRegistrationService = async (req: Request):Promise<object> => {
        const password = await this.hashPassword(req)
        const user = new User()
        user.firstName= req.body.firstName;
        user.lastName= req.body.lastName;
        user.username= req.body.username;
        user.email= req.body.username;
        user.phoneNumber= req.body.phoneNumber;
        user.password= password;
        
        const savedUser = await user.save()  // not creating
        console.log("hyhyh", savedUser)
        return { savedUser };
    }
}

export default new UserService();