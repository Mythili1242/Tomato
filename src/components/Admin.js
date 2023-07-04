import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Admin() {
  const navigate=useNavigate();
  const [rname,setRname]=useState();
  const [imgdata,setImgdata]=useState();
  const [address,setAddress]=useState();
  const [delimg,setDelimg]=useState("https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp");
  const [somedata,setSomedata]=useState();
  const [price,setPrice]=useState();
  const [rating,setRating]=useState();
  const [arrimg,setArrimg]=useState("https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp");

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
console.log(rname,imgdata,address,delimg,somedata,price,rating,arrimg);
let values={rname:rname,imgdata:imgdata,address:address,delimg:delimg,somedata:somedata,price:price,rating:rating,arrimg:arrimg}
console.log(values);

fetch("http://localhost:9000/rest/postrest",{
  method:"POST",
  body:JSON.stringify(values),
  headers:{
    "content-Type":"application/json"
  }
})
.then(res=>res.text())
.then(res=>alert(res));
navigate("/admin1")


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
     <h4>FILL RESTAURANT DETAILS</h4>
      <TextField id="filled-basic" name="rname" label="RESTAURANT NAME" onChange={(e)=>setRname(e.target.value)} variant="filled"  InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="imgdata" label="IMAGE ADDRESS" onChange={(e)=>setImgdata(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="address" label="TAG" variant="filled" onChange={(e)=>setAddress(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="delimg" label="DELIMG" onChange={(e)=>setDelimg(e.target.value)} value="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" variant="filled" InputLabelProps={{style: { color: 'red' }}} disabled/>
      <TextField id="filled-basic" name="somedata" label="ORDERS PLACED TEXT" onChange={(e)=>setSomedata(e.target.value)} variant="filled" InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name='price' label="PRICE" variant="filled" onChange={(e)=>setPrice(e.target.value)} InputLabelProps={{style: { color: 'red' }}} />
      <TextField id="filled-basic" name="rating" label="RATING" variant="filled" onChange={(e)=>setRating(e.target.value)} InputLabelProps={{style: { color: 'red' }}}/>
      <TextField id="filled-basic" name="arrimg" value="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp" onChange={(e)=>setArrimg(e.target.value)} label="ARRIMG" variant="filled" InputLabelProps={{style: { color: 'red' }}} disabled />
      <Button variant="outlined" type='submit' style={{margin:"auto"}}>Submit</Button>
    </Box>
    </div>
  )
}

export default Admin;

