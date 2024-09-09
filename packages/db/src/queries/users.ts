import { getClient } from "../dbConnect";

export async function insertUser(user_email : string, user_name : string) {
    console.log("insertUser called", user_email,user_name)
    
    const insertUser = `
        insert into USERS (email, name)
        values ('${user_email}', '${user_name}')
    `;

    const client = await getClient();

    await client.query(insertUser);

    // const create

    console.log("insertUser  successfully!", user_email);
}



// createTable();