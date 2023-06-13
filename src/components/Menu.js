import React from 'react'
// import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./style.css";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  {userContext}  from "../App";

function Menu() {
  const [cartitems,setCartitems]=useContext(userContext)
    const [items,setItems]=useState();
    const [sty,setSty]=useState(false);
    const logo =
    "data:image/png;base64,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";

    // let {item}=useParams()
    const location=useLocation();   
    const rest=location.state.item
    console.log(rest)
    const [count,setCount]=useState(1);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:9000/rest/items")
        .then(res=>res.json())
        .then(data=>{setItems(data);console.log(items)})
         },[])

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
           console.log(localStorage.getItem("token"))

           
          function handleAddItem(val,name,symbol,count){
console.log(val,name,symbol,count);
cartitems.push({val,name,symbol,count})
setCartitems(cartitems)
console.log(cartitems)
navigate("/cart",{state:{val:val,name:name,symbol:symbol,count:count}})
           }

  return (
<>
<div style={{opacity:sty?"0.4":"1"}}>
   {/* {rest && rest.map((item,k)=>{ 
    return (
        <>
    <div>Menu {item.rname}</div>
    </>
    )})} */}
    <div className="head container">

   
 <img src={require("./tomato.png")} style={{width:"190px",height:"160px"}} onClick={()=>{navigate("/")}} />

  {/* {localStorage.getItem("token")&&<h4>Welcome {((JSON.parse(localStorage.getItem("token"))).email)} {console.log((JSON.parse(localStorage.getItem("token"))).email)} </h4>
} */}
 {localStorage.getItem("token")?<h4>Welcome {((JSON.parse(localStorage.getItem("token"))).email)} {console.log((JSON.parse(localStorage.getItem("token"))).email)} </h4>:
  <ul className="list">
    <li><a href="/login">Login</a></li>
    <li><a href="/signup">SignUp</a></li>
  </ul>
}

<ul className="list"> 
<li><a href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
{localStorage.getItem("auth")==true&&<li><a href="/admin">admin</a></li>}
{localStorage.getItem("token")&& <li><a href="/" onClick={handlelogout}>Logout</a></li>} 
    {/* <li><a href="/" onClick={handlelogout} >Logout</a></li> */}
    
    </ul>
</div>

    <div className='container' >
   <h3 style={{color:"red",textAlign:"center"}}>Welcome to {rest.rname}</h3>
   
   {/* <h6 style={{textAlign:"center",color:"grey",fontSize:"small"}}>{rest.address}</h6> */}
   <h3 style={{color:"red"}}>Starters</h3>
{/* =========================== */}
{/* <div className="row mt-2 d-flex justify-content-around align-items-center "> */}
<div style={{display:'flex',flexDirection:"row",marginTop:"20px",flexWrap:"wrap"}}>
   {items && items.map((item,k)=>{
    return(
      <>
     <div  >
            <Card style={{ width: '22rem', border:"none",marginBottom:"40px",marginRight:"80px",flexBasis:"33.33%",backgroundColor:"aliceblue" }} >
      <Card.Img variant="top" src={item.imgsrc} className='cardimg' />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div className="uppertext">
            <p className="restaurant">{item.symbol}{item.name}</p>
            <p className="cost">₹{item.cost}</p>
            
        </div>
        <div className="middletext">
            {/* <p className="cuisine">{item.address}</p> */}
            <p className="rating1">{item.rating}</p>
            {/* <button style={{color:"red",border:"1px solid red"}}>+ add item</button> */}
            <OverlayTrigger trigger="click" placement="right" rootClose overlay={
                  <Popover id="popover-basic">
                  <Popover.Header as="h3" style={{fontSize:"20px",color:"red"}}>{item.name}</Popover.Header>
                  <Popover.Body>
                    {/* And here's some <strong>amazing</strong> content. It's very engaging.
                    right? */}
                    <Card style={{marginBottom:"10px"}}>
      <Card.Header style={{fontSize:"20px"}}>Extra</Card.Header>
      <Card.Body>
        <Card.Title>Select upto one option</Card.Title>
        <Card.Text >
        🌱 Onion & Lemon <input type='checkbox' />
        </Card.Text>
       
      </Card.Body>
    </Card>
    <ButtonGroup aria-label="Basic example">
      <Button variant="danger" onClick={(e)=>{if(count==1){e.preventDefault()} else{setCount(count=>count-1)}}}>-</Button>
      <Button variant="danger" >{count}</Button>
      <Button variant="danger" onClick={()=>setCount(count=>count+1)}>+</Button>
    </ButtonGroup>

    <Button variant="danger" style={{marginLeft:"1px"}} onClick={()=>handleAddItem(count * item.cost,item.name,item.symbol,count)}>Add item ₹{count * item.cost}</Button>
                  </Popover.Body>
                </Popover>
            }>
    <Button variant="danger" onClick={()=>setSty(!sty)}>add to cart</Button>
  </OverlayTrigger>
        </div>

        <div className="line"></div>

        <div className='lowertext'>
         
          <h6 style={{fontSize:"small"}}>{item.desc}</h6>
          {/* <img src={item.delimg} className='delimg' alt=''/> */}
        </div>
      </Card.Body>
    </Card>

    </div>  
      </>
    )
      })}
      </div>
      </div>
      </div>
   </>


   
  )
}

export default Menu



