import { useState } from 'react'
import "./HomePage.css"


function HomePage() {

  return (
    <div className='xyz'> 
     <header>
        <div class="navbar">
            <a href="#">CODE ENGINE</a>
         
        <ul class="links">   
            <li><a href="home">Home</a></li>
            <li><a href="notes">Notes</a></li>
            <li><a href="about">About</a></li>
            <li><a href="more">More</a></li>
        </ul>

        <a href="#" class="action_btn">SIGN UP</a>
        </div>
    </header>
    
    </div>
  )
}

export default HomePage