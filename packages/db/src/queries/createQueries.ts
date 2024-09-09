import { getClient } from "../dbConnect";

export async function createTable() {
    console.log("alterTableRename called")
    const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    const alterTableRename = `
        ALTER TABLE old_users
        RENAME TO users;
    `;
    const alterTableDropColumn = `
        ALTER TABLE users
        Drop column password;
    `;

    const client = await getClient();

    await client.query(alterTableDropColumn);

    // const createTodosQuery = `
    //     CREATE TABLE todos (
    //         id SERIAL PRIMARY KEY,
    //         title TEXT NOT NULL,
    //         description TEXT,
    //         user_id INTEGER REFERENCES users(id),
    //         done BOOLEAN DEFAULT FALSE
    //     );
    // `;


    // await client.query(createTodosQuery);

    console.log("Table alterTableDropColumn from usres successfully!");
}



// createTable();