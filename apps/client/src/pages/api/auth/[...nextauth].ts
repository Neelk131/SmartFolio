import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {Provider} from "next-auth/providers";

import GoogleProvider from "next-auth/providers/google"
import { saveSignedUpUserToDb } from "@/lib/utils/authUtils";


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
        }),CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // await ensureDbConnected()
                // if (!credentials) {
                //     return null;
                // }
                // const username = credentials.username;
                // const password = credentials.password;
                // // Add logic here to look up the user from the credentials supplied
                // const admin = await Admin.findOne({ username });

                // if (!admin) {
                //     const obj = { username: username, password: password };
                //     const newAdmin = new Admin(obj);
                //     let adminDb = await newAdmin.save();
                //     console.log(adminDb);
                //     return {
                //         id: adminDb._id,
                //         email: adminDb.username,
                //     }
                // } else {
                //     //TODO:: Make this safer, encrypt passwords
                //     if (admin.password !== password) {
                //         return null
                //     }
                //     // User is authenticated
                //     return {
                //         id: admin._id,
                //         email: admin.username,
                //     }
                // }
                return {id:'1',username:"neel"}
            }
        })
    ] as Provider[],
    callbacks: {
        async signIn({ user, account, profile }) {
            return saveSignedUpUserToDb(user)
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
}

export default NextAuth(authOptions);