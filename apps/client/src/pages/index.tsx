import { Inter } from 'next/font/google'
import { Button, Typography } from "@mui/material";
import {signIn, useSession, signOut} from "next-auth/react"
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from 'ui/components/NavBar';

export default function Home() {
  const session = useSession();
  // const email = session.data?.user?.email;
  // const name  = session.data?.user?.name
  const [counter, setCounter] = useState(0)
  
  return (
      
     <div>
      {counter}
      <button onClick={()=>setCounter(prevCount => prevCount+1)}>click</button>
     </div>

  )
}