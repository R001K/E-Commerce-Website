import React from 'react'
import'./Style/Slide.css'


export default function Slide() {
  function first()
  {
    document.getElementById('img1').src="images/fashion1.jpg";
    document.getElementById('msg').innerHTML="Hii! Rahul";
  }

  function prev()
  {
    document.getElementById('img1').src="images/about1.jpg";
    document.getElementById('msg').innerHTML="Hii! Previous";

  }

  function next()
  {
    document.getElementById('img1').src="images/about2.jpg";
  }

  return (
    <div>
     
<h1 id='msg' className='msg'>Hello</h1>

<p className='slidebutton'>
 <button onClick={first}> First</button>
 <button  onClick={prev}> Prev</button>
 <button  onClick={next}> Next</button>
 
</p>



  <div>
<img id='img1'
        className='slide1'
       src="Images/fashion1.jpg" width="450px" height="300px;"
          alt />
          </div>
    </div>
  )
}
