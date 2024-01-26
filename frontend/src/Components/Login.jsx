import { useState } from 'react'

import "./Login.css"
import image3 from '../images/image3.jpg'
function Login() {

  return (
    <div className="box"> 
      
        <form>
            <h2>Sign In</h2>

            <div class="input-box"> 
                
                <input type="text" placeholder="username"/>
                 
            </div>

            <div class="input-box">
                
                <input type="password" placeholder="Password"/>
            </div>
            
            <input class="input-box" type="submit"  id="btn" value="Login"/>

            <div class="group">
                <a href="#">Forgot Password</a>
                <a href="#">Sign Up</a>


            </div>

        </form>
    </div>
  )
}

export default Login
