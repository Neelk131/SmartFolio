import { Inter } from 'next/font/google'
import { Button, Typography } from "@mui/material";
import {signIn, useSession, signOut} from "next-auth/react"
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  const session = useSession();
  const email = session.data?.user?.email;
  const name  = session.data?.user?.name
  if(session.status == 'authenticated'){
    const response = axios.post("/api/signup", {
      email, 
      name
    });
  }
  console.log()
  return (
    <div style={{height: 60, background: "white", padding: 10}}>
      {session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant={"h4"} style={{color: "black"}}>
          {session.data.user?.email}
        </Typography>
        <div>
          <Button variant={"contained"} onClick={() => signOut()}>Logout</Button>
        </div>
        </div>}
      {!session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant={"h4"} style={{color: "black"}}>
          SmartFolio
        </Typography>
        <div>
          <Button variant={"contained"} onClick={() => signIn()}>Sign up</Button>
        </div>
      </div>}
    </div>
  )
}