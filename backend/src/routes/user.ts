import { Router } from "express";
import { signIn } from '../auth/signin-with-provider';
import * as middleware from '../middleware/middleware';
import { client } from "./../database/database-config";
import { signInUser } from './../database/user-login';
import { createUser } from './../database/user-signup';


const router = Router();

router.post("/signup", middleware.decodeToken, async (req, res) => {

    try {
        req.body.user.displayName = req.body.displayName;
        const result = await createUser(req.body.user);
        await client.close();

        return res
            .header("x-auth-token", req.headers.authorization)
            .send({
                response: { data: result.data },
            });
    } catch (error) {
        return res.status(400).send({ response: { error: `${error}` } });
    }
});

router.get("/signin", middleware.decodeToken, async (req, res) => {

    try {
        const user = await signIn(req.body.user);
        await client.close();

        return res.send(user!.data);

    } catch (error) {
        return res.status(400).send({ response: { error: `${error}` } });
    }
});

export { router as userRouter };
