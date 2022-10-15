import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [about, setAbout] = useState(false);
    const [work, setWork] = useState(false);
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(false);

    const path = window.location.pathname;

    useEffect(() => {
        if (path === "/about-me") {
            setAbout(true);
            setWork(false);
            setContact(false);
            setHome(false);
        } else if (path === "/contact-me") {
            setAbout(false);
            setWork(false);
            setContact(true);
            setHome(false);
        } else if (path === "/my-work") {
            setAbout(false);
            setWork(true);
            setContact(false);
            setHome(false);
        } else {
            setAbout(false);
            setWork(false);
            setContact(false);
            setHome(true);
        }
    }, [path]);

    return (
        <nav className='navbar'>
            <div>
                <div>
                    <Link className={home ? 'dark left' : 'light left'} to="/"><span>Aman</span></Link>
                </div>
                <div className='rightDiv'>
                    <div>
                        <Link className={contact ? 'dark animate right contact' : 'light animate right contact'} to="/contact-me"><span>Contact Me</span></Link>
                    </div>
                    <div>
                        <Link className={work ? 'dark animate right contact' : 'light animate right contact'} to="/my-work"><span>My Work</span></Link>
                    </div>
                    <div>
                        <Link className={about ? 'dark animate right contact' : 'light animate right contact'} to="/about-me"><span>About</span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
