import firebaseAdmin from "../firebase/firebaseConfig";

async function decodeFirebaseToken(req: any, res: any, next: any) {
    const token = req.headers.authorization;
    try {
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token)
        if (!decodedToken) throw new Error('Firebase: Unauthorize')

        const user = {
            _id: decodedToken.uid,
            displayName: decodedToken.name,
            email: decodedToken.email,
            emailVerified: decodedToken.email_verified,
            picture: decodedToken.picture
        }

        req.body.user = user;
        next();

    } catch (error) {
        console.log(error);
        return res.status(400).send({ response: { error: `Firebase Error ${error}` } });
    }
}

export { decodeFirebaseToken as decodeToken };