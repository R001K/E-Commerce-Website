import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import'./Style/FetchProduct.css'
export default function FetchProduct() {
    const [post,setPost]=useState([])
    useEffect(()=>
   

     async function getdata(){
       try{
const res=await axios.get("https://fakestoreapi.com/products");
   console.log(res.data); 
   setPost(res.data); 
       }
       catch(err)  
       { 

 console.log(err);
}
getdata()

   },[])
  return (
   
     <div className='P1'>
        {/* fIRST */}
 
      <Card style={{ width: '100px' }}>
      <Card.Img variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="200px" height="150px;" />
     
      <Card.Body>
<Card.Title ><b>Luios Vout</b> <br/>Price$:300</Card.Title>
   <a href="shopkaro">   <button className='b1'>Add To Card</button> </a>  
        {post.map((e,index)=><li key={index}>
    <br/>
        </li>)}  
       
</Card.Body>
</Card>
    
        {/* Second */}
       <div className='P2'>
 
      <Card style={{ width: '100px' }}>
      <Card.Img variant="top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width="200px" height="150px;" />
     
      <Card.Body>
      <Card.Title><b>Denie Jacket</b> <br/>Price$:250</Card.Title>
      <a href="shopkaro"> <button className='b1'>Add To Card</button> </a>
        {post.map((e,index)=><li key={index}>
    <br/>
        </li>)}  
       
</Card.Body>
</Card>
    
  
 </div>

    {/* Third */}
   <div className='P3'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width="200px" height="150px;" />

 <Card.Body>
 <Card.Title><b>Levie Shirt</b> <br/>Price$:150</Card.Title> 
 <a href="shopkaro"> <button className='b1'>Add To Card</button> </a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

 {/* Fourth */}
 <div className='P4'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" width="150px" height="150px;" />

 <Card.Body>
<Card.Title><b>Platinium Braclet</b> <br/>Price$:900</Card.Title> 
<a href="shopkaro">  <button className='b1'>Add To Card</button> </a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>


{/* FIVETH */}
<div className='P5'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" width="110px" height="100px;" />

 <Card.Body> 
 <Card.Title><b>Diamond Ring</b> <br/>Price$:1200</Card.Title> 
 <a href="shopkaro"> <button className='b1'>Add To Card</button></a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

{/* SixTH */}
<div className='P6'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" width="140px" height="140px;" />

 <Card.Body>
 <Card.Title><b>Boat Speaker</b> <br/>Price$:200</Card.Title>
 <a href="shopkaro"> <button className='b1'>Add To Card</button> </a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

{/* Seven */}

<div className='P7'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" width="150px" height="170px;" />

 <Card.Body>
  <Card.Title><b>Colib-Jacket</b> <br/>Price$:200  </Card.Title> 
 <a href="shopkaro">  <button className='b1'>Add To Card</button> </a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>

{/* Eight */}
<div className='P8'>
 
 <Card style={{ width: '100px' }}>
 <Card.Img variant="top" src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" width="140px" height="170px;" />

 <Card.Body>
 <Card.Title><b>Nike-Sprakle</b> <br/>Price$:100</Card.Title>  
 <a href="shopkaro">  <button className='b1'>Add To Card</button> </a>
   {post.map((e,index)=><li key={index}>
<br/>
   </li>)}  
  
</Card.Body>
</Card>
</div>









    </div>
  )
}
