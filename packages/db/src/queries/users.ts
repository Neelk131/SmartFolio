import { getClient } from "../dbConnect";

type UserData = {
    email?: string;
    name?: string;
    provider?: string;
  }
  
export async function insertUser(data: UserData) {
    console.log("insertUser called", data.email,data.name)
    
    const insertUser = `
        insert into USERS (email, name,provider)
        values ($1, $2, $3)
    `;

    const client = await getClient();

    await client.query(insertUser,[data.email,data.name,data.provider]);

    console.log("insertUser  successfully!", data.email);
}

export async function findUser_old(user_email : string,) {
    console.log("findUser called", user_email)
    
    const findUser = `
        select cunt(*) from users where email = '${user_email}'
    `;

    const client = await getClient();

    const count  = await client.query(findUser);

    console.log("findUser  successfully!", user_email);
    return count;
}

export async function findUser(user_email: string) {
    console.log("findUser called", user_email);

    const findUserQuery = `
        SELECT COUNT(*) FROM users WHERE email = $1
    `;

    const client = await getClient();
    try {
        const result = await client.query(findUserQuery, [user_email]);
        const count = result.rows[0].count;
        console.log("findUser successfully!", user_email, count);
        return parseInt(count, 10); 
    } catch (error) {
        console.error("Error in findUser:", error);
        throw error; 
    } 
}
