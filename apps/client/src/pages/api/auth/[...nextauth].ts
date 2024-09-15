import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {Provider} from "next-auth/providers";

import GoogleProvider from "next-auth/providers/google"
import { findUser, insertUser } from "db";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
        }),
    //     CredentialsProvider({
    //         id: "credentials",
    //         name: "Credentials",
    //         type: "credentials",
    //         credentials: {
    //             username: { label: "Username", type: "text", placeholder: "jsmith" },
    //             password: { label: "Password", type: "password" }
    //         },
    //         async authorize(credentials, req) {
    //             await ensureDbConnected()
    //             if (!credentials) {
    //                 return null;
    //             }
    //             const username = credentials.username;
    //             const password = credentials.password;
    //             // Add logic here to look up the user from the credentials supplied
    //             const admin = await Admin.findOne({ username });

    //             if (!admin) {
    //                 const obj = { username: username, password: password };
    //                 const newAdmin = new Admin(obj);
    //                 let adminDb = await newAdmin.save();
    //                 console.log(adminDb);
    //                 return {
    //                     id: adminDb._id,
    //                     email: adminDb.username,
    //                 }
    //             } else {
    //                 //TODO:: Make this safer, encrypt passwords
    //                 if (admin.password !== password) {
    //                     return null
    //                 }
    //                 // User is authenticated
    //                 return {
    //                     id: admin._id,
    //                     email: admin.username,
    //                 }
    //             }
    //         }
    //     }),
    ] as Provider[],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        encryption: true
    },
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
        }),
    ] as Provider[],
    callbacks: {
        async signIn({ user, account, profile }) {
          // Check if user already exists
          const existingUser = await findUser( user.email );
          console.log("existingUser .... ", existingUser);
          
    
          if (existingUser == 0) {
            // If user doesn't exist, create a new user
            const data = {
              data: {
                email: user.email,
                name: user.name,
                provider: 'google',
              }};
            
            await insertUser({
                email: user.email,
                name: user.name,
                provider: 'google',
              });
          }
          return true;
        },
        // async session({ session, user }) {
        //   session.userId = user.id; // Add user ID to session
        //   return session;
        // },
      },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
})



