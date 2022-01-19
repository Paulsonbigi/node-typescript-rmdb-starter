import { Request, Response } from "express"
import userService from "./user.service"

class UserController {
    public registerUserController = async (req:Request,res:Response) => {
        try{
            const registeredUser = await userService.userRegistrationService(req);
            return res.status(200).json({
                data: registeredUser
            })
        } catch (err:any){
            console.error(err)
            return res.status(500).json({message:err.message})
        }
    }
}

export default new UserController()