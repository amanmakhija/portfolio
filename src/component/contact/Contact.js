import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <div className='contact'>
            <div className='contactMain'>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div className='main'>
                    <p>I will come back to you as soon as I get your message!</p>
                    <form action="mailto:amanmakhija2205@gmail.com" method="post" enctype="text/plain">
                        <div className='nameInput'>
                            <input className='input' name='firstName' type='text' placeholder='Your First Name' />
                            <input className='input' name='lastName' type='text' placeholder='Your Last Name' />
                        </div>
                        <div>
                            <input className='input wideInputs' name='email' type='text' placeholder='Your Email' />
                        </div>
                        <div>
                            <input className='input wideInputs' name='subject' type='text' placeholder='Subject' />
                        </div>
                        <div className='circle3'>
                            <div>
                                <textarea className='input message wideInputs open' name='message' type='text' rows='3' placeholder='Your Message' />
                            </div>
                            <div>
                                <input className='button' type='submit' value="Send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
