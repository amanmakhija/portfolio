import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [about, setAbout] = useState(false);
    const [work, setWork] = useState(false);
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(false);

    const path = window.location.pathname;

    const aboutMe = () => {
        setAbout(true);
        setWork(false);
        setContact(false);
        setHome(false);
    };

    const contactMe = () => {
        setAbout(false);
        setWork(false);
        setContact(true);
        setHome(false);
    };

    const myWork = () => {
        setAbout(false);
        setWork(true);
        setContact(false);
        setHome(false);
    };

    const homePage = () => {
        setAbout(false);
        setWork(false);
        setContact(false);
        setHome(true);
    };

    useEffect(() => {
        if (path === "/about-me") {
            aboutMe();
        } else if (path === "/contact-me") {
            contactMe();
        } else if (path === "/my-work") {
            myWork();
        } else {
            homePage();
        }
    }, [path]);

    return (
        <nav className='navbar'>
            <div>
                <div>
                    <Link onClick={() => homePage()} className={home ? 'dark left' : 'light left'} to="/"><span>Aman</span></Link>
                </div>
                <div className='rightDiv'>
                    <div>
                        <Link onClick={() => contactMe()} className={contact ? 'dark animate right contact' : 'light animate right contact'} to="/contact-me"><span>Contact Me</span></Link>
                    </div>
                    <div>
                        <Link onClick={() => myWork()} className={work ? 'dark animate right contact' : 'light animate right contact'} to="/my-work"><span>My Work</span></Link>
                    </div>
                    <div>
                        <Link onClick={() => aboutMe()} className={about ? 'dark animate right contact' : 'light animate right contact'} to="/about-me"><span>About</span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
