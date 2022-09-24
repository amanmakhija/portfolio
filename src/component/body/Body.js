import React from 'react'
import "./Body.css"

export default function Body() {
    return (
        <div className='mainBody'>
            <div className='circle1'>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH-2wUaKknySA/profile-displayphoto-shrink_400_400/0/1649775645722?e=1669248000&v=beta&t=kSIdJvevcb2gqL9BYtw4GtiQDCVIHuOKki2kCvBf7Os" alt="Aman Makhija" />
            </div>
            <div className='circle2'></div>
            <div className='text'>
                <span>Hi,<br />I'm a <b>Web Developer.</b></span>
            </div>
        </div>
    )
}
