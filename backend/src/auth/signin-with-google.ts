import { client, usersCollection } from "../database/database-config";
import { IUser } from "../model/user";
import { generateId } from "../services/generateId";
const bcrypt = require('bcrypt')


export const signInWithGoogle = async (user: IUser) => {
    await client.connect();

    const userExist = await usersCollection.findOne({ email: user.email });
    if (!userExist) {
        const salt = await bcrypt.genSalt(parseInt(`${process.env.BCRYPT_SALT}`));
        if (user.password) user.password = await bcrypt.hash(user.password, salt);

        try {
            await usersCollection.insertOne(user);
            const response = {
                data: {
                    _id: user._id,
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    picture: user.picture
                }
            }
            return response;
        } catch (ex) {
            throw new Error(`${ex}`)
        }
    }
    const response = {
        data: {
            displayName: userExist.displayName,
            email: userExist.email,
            emailVerified: userExist.emailVerified,
            picture: userExist.picture
        }
    }
    return response;
}