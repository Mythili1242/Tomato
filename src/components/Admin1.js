import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Admin1() {

    const [name,setName]=useState();
    const [imgsrc,setimagesrc]=useState();
    const [rating,setRating]=useState();
    const [cost,setCost]=useState();
    const [symbol,setSymbol]=useState();
    const [desc,setDesc]=useState();

const navigate=useNavigate();

    const handlelogout=async()=>{
        const result=await(await fetch("http://localhost:9000/rest/logout",{
          method:"POST",
          credentials:"include"
        })).json()
        
        console.log(result);
        // .then(res=>console.log(res.json()))
        // .then(a=>console.log(a))
        localStorage.setItem("token","")
         }


         const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(name,imgsrc,rating,cost,symbol,desc);
            let values={name:name,imgsrc:imgsrc,rating:rating,cost:cost,symbol:symbol,desc:desc}
            console.log(values);
            
            fetch("http://localhost:9000/rest/postmenu",{
              method:"POST",
              body:JSON.stringify(values),
              headers:{
                "content-Type":"application/json"
              }
            })
            .then(res=>res.text())
            .then(res=>alert(res));
            // navigate("/")
            
            
            }




  return (
    <div className='container'>
    <div className="head container">

   
<img src={require("./tomato.png")} style={{width:"190px",height:"160px"}} onClick={()=>{navigate("/")}} />


{localStorage.getItem("token")?<h4>Welcome {((JSON.parse(localStorage.getItem("token"))).email)} {console.log((JSON.parse(localStorage.getItem("token"))).email)} </h4>:
 <ul className="list">
   <li><a href="/login">Login</a></li>
   <li><a href="/signup">SignUp</a></li>
 </ul>
}

<ul className="list"> 
<li><a href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
{localStorage.getItem("token")&& <li><a href="/" onClick={handlelogout}>Logout</a></li>} 

   
   </ul>
</div>

<Box
component="form"
sx={{
  // m: "auto", width: '45ch',p:"15px" ,
  '& > :not(style)': { display:"flex",justifyContent:"center",marginBottom:"30px",color:"red"},
  
}}
onSubmit={handleSubmit}
noValidate
// autoComplete="off"
>
<h4>FILL MENU DETAILS</h4>
<TextField id="filled-basic" name="name" label="NAME" onChange={(e)=>setName(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />
<TextField id="filled-basic" name="imgsrc" label="IMAGE ADDRESS" onChange={(e)=>setimagesrc(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />

{/* <TextField id="filled-basic" name="rating" label="RATING" variant="filled" onChange={(e)=>setRating(e.target.value)} InputLabelProps={{style: { color: 'red' }}}/> */}
<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"red"}}>RATING</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
      >
        <FormControlLabel value="⭐" control={<Radio />} label="⭐" />
        <FormControlLabel value="⭐⭐" control={<Radio />} label="⭐⭐" />
        <FormControlLabel value="⭐⭐⭐" control={<Radio />} label="⭐⭐⭐" />
        <FormControlLabel value="⭐⭐⭐⭐" control={<Radio />} label="⭐⭐⭐⭐" />
        <FormControlLabel value="⭐⭐⭐⭐⭐" control={<Radio />} label="⭐⭐⭐⭐⭐" />
      </RadioGroup>
    </FormControl>

<TextField id="filled-basic" name='cost' label="COST" variant="filled" onChange={(e)=>setCost(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
{/* <TextField id="filled-basic" name="symbol"  onChange={(e)=>setSymbol(e.target.value)} label="symbol" variant="filled" InputLabelProps={{style: { color: 'red' }}}  /> */}

<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"red"}}>SYMBOL</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={symbol}
        onChange={(e)=>setSymbol(e.target.value)}
      >
        <FormControlLabel value="🌱" control={<Radio />} label="🌱" />
        <FormControlLabel value="🍗" control={<Radio />} label="🍗" />
      </RadioGroup>
    </FormControl>

<TextField id="filled-basic" name="desc" label="DESCRIPTION" onChange={(e)=>setDesc(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />

<Button variant="outlined" type='submit' style={{margin:"auto"}}>Submit</Button><br></br>
<Button variant="outlined" style={{margin:"auto"}} onClick={()=>navigate("/")}>Go to home</Button>
</Box>
</div>

  )
}

export default Admin1;
