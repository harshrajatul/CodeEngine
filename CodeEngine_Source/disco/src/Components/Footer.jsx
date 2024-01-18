import React from 'react'
const date= new Date().getFullYear();

function Footer(){
    return(
        <div className='footer'>
            <p>Made by Ankit</p>
            <p>{date}</p>
        </div>

    )
}
export default Footer;