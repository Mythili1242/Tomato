import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
// import "./signup.css";

const redTheme = createTheme({ palette: { primary: red } })

const SignUp=()=>{

const [fname,setFname]=useState();
const [lname,setLname]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const navigate=useNavigate()

function handleSubmit(e){
e.preventDefault();
console.log(fname,lname,email,password)

fetch("http://localhost:9000/rest/sign",{
    method:"POST",
    body:JSON.stringify({firstname:fname,lastname:lname,email:email,password:password}),
    headers:{
        "content-type":"application/JSON"
    }
})
// .then(res=>res.json())
.then(res=>res.text())
.then(a=>{console.log(a);navigate("/login")})
.catch(err=>console.log(err))

}

return(
    <>
    
    <Box
      component="form"
     
      
      sx={{
        "& .MuiTextField-root": { m: 1, width: "65ch" },marginTop:"50px"
      }}
    //   noValidate
    //   autoComplete="off"
      style={{ textAlign: "center",color:"red" }}
      onSubmit={handleSubmit}
    >
      <h1 style={{ textAlign: "center",color:"red" }}>Signup form</h1>

        <div>
          <FormControl>
            {/* <FormLabel style={{textAlign:"left"}}>Enter First name:</FormLabel> */}
            <TextField
              required
              id="filled-required"
              label="Enter First name"
              //    defaultValue="Hello World"
              variant="filled"
             value={fname}
             onChange={(e)=>setFname(e.target.value)}
            />
          </FormControl>
        </div>

        <div>
          <FormControl>
            {/* <FormLabel style={{textAlign:"left"}}>Enter Last name:</FormLabel> */}
            <TextField
              required
              id="filled-required"
              label="Enter Last name"
              //    defaultValue="Hello World"
              variant="filled"
              value={lname}
              onChange={(e)=>setLname(e.target.value)}
            />
          </FormControl>
        </div>

        <div>
          <FormControl>
            {/* <FormLabel style={{textAlign:"left"}}>Enter Email:</FormLabel> */}
            <TextField
              required
              id="filled-required"
              label="Enter Email"
              //    defaultValue="Hello World"
              variant="filled"
             type="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>
        </div>


        <div>
          <FormControl>
            {/* <FormLabel style={{textAlign:"left"}}>Enter password</FormLabel> */}
            <TextField
            required
              id="filled-password-input"
              label="Enter password"
              type="password"
              // autoComplete="current-password"
              variant="filled"
              value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
          </FormControl>
        </div>
        <div>
        <FormControl>
        <ThemeProvider theme={redTheme}>
        <Button variant="outlined" color="primary" type="submit" style={{marginTop:"20px"}}>
        Submit
      </Button>
      
      </ThemeProvider>
        </FormControl>
        
        </div>
      {/* </form> */}
    </Box>
   
    </>
)
}


export default SignUp;