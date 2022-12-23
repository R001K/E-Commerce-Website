import React from 'react'
import'./Style/Timer.css'

export default function Timer() {
  return (
    <div  className="Timerclass">
   <img
         className="Timer"
       src="Images/Timer1.jpg" width="550px" height="650px;"
          alt="Second slide"
        />
        <p className='T1'><b>Deal Of The Weak</b></p>
      
 <div className='time'>
<iframe
  src="https://free.timeanddate.com/countdown/i8i3ild0/n2356/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pc78866b/tcfff/fn2/fs375/szw320/szh135/iso2022-09-15T00:00:00"
  allowTransparency="true"
  frameBorder={0}
  width={305}
  height={102}
/>

<a href="shop"> <button className='buttontimer'>SHOP NOW</button></a>



  </div>
    </div>
  )
}
