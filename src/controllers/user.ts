import { Request, Response } from "express";
import { createUser } from "../domain/user";
import { CreateUserInput } from "../schema/user";
import sendEmail from "../utils/mailer"

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>, res: Response) {
    const body = req.body

    try{
        const user = await createUser(body)

        await sendEmail({
            from: 'test@example.com',
            to: 'user.email',
            subject: 'Please verify your account',
            text: `verification code ${user.verificationCode}. Id ${user.id}`
        })

        return res.send("User successfully created")
    } catch(e: any){
        if (e.code === 11000) return res.status(409).send("Email already in use")
        return res.status(500).send(e)
    }
}