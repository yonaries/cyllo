require('dotenv').config()
import { client, usersCollection } from './database-config';
import { IUser } from '../model/user';

export const signInUser = async (user: IUser) => {
    await client.connect();
    const userExist = await usersCollection.findOne({ email: user.email });
    if (!userExist) throw new Error("No account found with this email!");

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