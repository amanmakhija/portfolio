import React, { useState } from 'react'
import "./Contact.css"
import axios from "axios"

export default function Contact() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [btnText, setBtnText] = useState("Send");

    const submitHandler = async (e) => {
        e.preventDefault();
        setBtnText("Sending...");

        const url = "https://react-portfolio-db-server.herokuapp.com/message";

        setTimeout(() => {
            setSent(true);
            setBtnText("Sent!");
        }, 4000);

        setTimeout(() => {
            setSent(false);
            setBtnText("Send");
            setFName("");
            setLName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, 10000);

        await axios.post(url, {
            "name": `${fName} ${lName}`,
            email,
            subject,
            message
        });
    };

    return (
        <div className='contact'>
            <div className='contactMain'>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div className='main'>
                    <p>I will get back to you as soon as I get your message!</p>
                    <form>
                        <div className='nameInput'>
                            <input value={fName} onChange={(e) => setFName(e.target.value)} className='input' name='firstName' type='text' placeholder='Your First Name' />
                            <input value={lName} onChange={(e) => setLName(e.target.value)} className='input' name='lastName' type='text' placeholder='Your Last Name' />
                        </div>
                        <div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='input wideInputs' name='from_email' type='text' placeholder='Your Email' />
                        </div>
                        <div>
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} className='input wideInputs' name='subject' type='text' placeholder='Subject' />
                        </div>
                        <div className='circle3'>
                            <div>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='input message wideInputs open' name='message' type='text' rows='3' placeholder='Your Message' />
                            </div>
                            <div>
                                <input onClick={(e) => submitHandler(e)} className='button' id='button' disabled={sent ? true : false} type="submit" value={btnText} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
