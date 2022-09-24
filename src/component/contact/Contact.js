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
                    <form>
                        <div className='nameInput'>
                            <input className='input' type='text' placeholder='Your First Name' />
                            <input className='input' type='text' placeholder='Your Last Name' />
                        </div>
                        <div>
                            <input className='input wideInputs' type='text' placeholder='Your Email' />
                        </div>
                        <div>
                            <input className='input wideInputs' type='text' placeholder='Subject' />
                        </div>
                        <div className='circle3'>
                            <div>
                                <textarea className='input message wideInputs open' type='text' rows='3' placeholder='Your Message' />
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
