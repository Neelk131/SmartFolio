import { UserData } from "../types/userTypes";
import { findUser, insertUser } from "db";

export async function saveSignedUpUserToDb(user: UserData) {

    // Check if user already exists
    const existingUser = await findUser(user.email);
    console.log("existingUser .... ", existingUser);

    if (existingUser == 0) {
        // If user doesn't exist, create a new user
        const data = {
            data: {
                email: user.email,
                name: user.name,
                provider: 'google',
            }
        };

        await insertUser({
            email: user.email,
            name: user.name,
            provider: 'google',
        });
    }
    return true;
}