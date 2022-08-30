import { IUser } from '../model/user';
import { client, usersCollection } from './database-config';
require('dotenv').config()

export const createUser = async (user: IUser) => {
    await client.connect();

    const userExist = await usersCollection.findOne({ email: user.email });
    if (userExist) throw new Error('user already exist with this email!')

    try {
        await usersCollection.insertOne(user);
        const response = {
            data: {
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

