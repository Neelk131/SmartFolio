import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";

export function Signup(props: {
    onClick: (username: string, password: string) => void
}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to SmartFolio. Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br /><br />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={() => props.onClick("abc","def")
                        
                        // let data = response.data;
                        // localStorage.setItem("token", data.token);
                        // // window.location = "/"
                        // setUser({userEmail: email, isLoading: false})
                        // navigate("/courses")
                    }

                > Signup</Button>
            </Card>
        </div>
    </div>

}