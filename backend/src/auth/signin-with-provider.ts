import { client, usersCollection } from "../database/database-config";
import { IUser } from "../model/user";


export const signIn = async (user: IUser) => {
    await client.connect();

    const userExist = await usersCollection.findOne({ email: user.email });
    if (!userExist) {

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