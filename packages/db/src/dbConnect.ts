import { Client } from 'pg';

export async function getClient() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
          rejectUnauthorized: false, // This allows self-signed certificates
        },
      });
    await client.connect();
    return client;
}