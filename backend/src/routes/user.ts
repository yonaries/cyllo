import { Router } from "express";
import { signInWithGoogle } from '../auth/signin-with-google';
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
        let user: any;
        if (req.headers.provider === 'google.com') user = await signInWithGoogle(req.body.user);
        if (req.headers.provider === 'cyllo') user = await signInUser(req.body.user);
        await client.close();

        return res
            .header("token", req.headers.authorization)
            .send(user!.data);

    } catch (error) {
        return res.status(400).send({ response: { error: `${error}` } });
    }
});

export { router as userRouter };
