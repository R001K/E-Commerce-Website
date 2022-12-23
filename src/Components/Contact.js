import React from 'react'
import'./Style/Contact.css'
export default function Contact() {
  return (
   
   <div className='contact'>
   
    <div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      className="gmap_iframe"
      width="100%"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src="https://maps.google.com/maps?width=1374&height=559&hl=en&q=Hisar.Haryana&t=p&z=10&ie=UTF8&iwloc=B&output=embed"
    />
    <a href="https://mcpenation.com/">https://mcpenation.com</a>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".mapouter{position:relative;text-align:right;width:100%;height:559px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:559px;}.gmap_iframe {height:559px!important;}"
    }}
  />
</div>
</div>



  
  )
}
