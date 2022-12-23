import React from 'react'
import'./Style/Productshow.css'

export default function Productshow() {
  return (
    <div>
         <img
         className="show1"
       src="Images/j1.jpg" width="310px" height="350px;"
          alt="Second slide"
        />

<img
         className="show2"
       src="Images/j.jpg" width="120px" height="120px;"
          alt="Second slide"
        />


<img
         className="show3"
       src="Images/j2.jpg" width="120px" height="120px;"
          alt="Second slide"
        />

<img
         className="show4"
       src="Images/j3.jpg" width="120px" height="120px;"
          alt="Second slide"
        />
  
  <div >
    <p className='show5'>Pocket cotton Jacket</p><br/>
    <p className='show6'>Nam tempus turpis at metus scelerisque placerat nulla deumantos <br/>solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>

<button className='show7'>FREE DELIVERY</button><br/>
  <p className='show8'> Price:  $495.00/</p><br/><br/>
  
  <div className='show9'> 
  Quantity:  <button >-</button>1<button >+</button>= $495.00<br/>
  <button className='show10'>Add To Card</button>
  </div>

  </div>
  

    </div>

    
  )
}
