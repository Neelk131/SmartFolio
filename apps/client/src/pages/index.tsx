import { Inter } from 'next/font/google'
import { Button, Typography } from "@mui/material";
import {signIn, useSession, signOut} from "next-auth/react"
import axios from 'axios';
import { useEffect } from 'react';
import NavBar from 'ui/components/NavBar';

export default function Home() {
  const session = useSession();
  // const email = session.data?.user?.email;
  // const name  = session.data?.user?.name
  
  return (
    <div style={{ height: 60, background: "grey", padding: 20}}>
      <NavBar></NavBar>
     </div>

  )
}