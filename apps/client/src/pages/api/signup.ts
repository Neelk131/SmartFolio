// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { Admin } from "db";
import jwt from "jsonwebtoken";
import { create } from 'domain';
import { insertUser } from 'db';
import { log } from 'console';

const SECRET = "SECRET";

type Data = {
  token?: string;
  message?: string;
  name?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log("handler called", req.body);
    const { email,name } = req.body;
    console.log("email, name of user", email, name);
    
    await insertUser({
      email:email, 
      name:name,
      provider:'system'
    });
    // await ensureDbConnected()
    // const { username, password } = req.body;
    // const admin = await Admin.findOne({ username });
    // if (admin) {
    //     res.status(403).json({ message: 'Admin already exists' });
    // } else {
    //     const obj = { username: username, password: password };
    //     const newAdmin = new Admin(obj);
    //     newAdmin.save();

    //     const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    //     res.json({ message: 'Admin created successfully', token });
    // }    
}