import React from 'react'
import Skills from '../../utils/skills/Skills'
import "./About.css"

export default function About() {
    const totalSkills1 = [
        {
            name: "MongoDB",
            url: "http://pluspng.com/img-png/logo-mongodb-png-mongodb-1600.png",
        },
        {
            name: "Express",
            url: "https://miro.medium.com/max/5000/1*M1XoId5pZaVJiIDAMDTDiw.png",
        },
        {
            name: "ReactJS",
            url: "https://www.doubleklickdesigns.com/wp-content/uploads/2020/07/reactjs-300x267.png",
        },
        {
            name: "NodeJS",
            url: "https://trankyphat.com/wp-content/uploads/2015/05/nodejs-logo.png",
        }
    ];
    const totalSkills2 = [
        {
            name: "HTML",
            url: "https://amanmakhija.github.io/myportfolio/images/html.png",
        },
        {
            name: "CSS",
            url: "https://amanmakhija.github.io/myportfolio/images/css.png",
        },
        {
            name: "JS",
            url: "https://amanmakhija.github.io/myportfolio/images/javascript.png",
        },
        {
            name: "Android",
            url: "https://1.bp.blogspot.com/-PwaAONmMm78/V-ASbVPG39I/AAAAAAAADZY/boHNhTW5V4Y45qzx6gIweePgoO2VkIhfQCLcB/s1600/image04.png",
        }
    ];

    return (
        <div className='about'>
            <div className='aboutMain'>
                <div>
                    <h1>About</h1>
                </div>
                <div className='aboutMainDiv'>
                    <div className='imageContainer'>
                        <img className='image' src='https://amanmakhija.github.io/myportfolio/images/myimg.jpg' alt='Aman Makhija' />
                    </div>
                    <div className='aboutTextContainer'>
                        <p className='aboutText'>I'm a Student currently pursuing B.Tech. and a<br />FreeLancer doing Full Stack Web Development.</p>
                        <div className='skills'>
                            <div className='skillsMainDiv'>
                                <h1 className='skillsHeading'>Skills</h1>
                                <div>
                                    {totalSkills1.map(i => (
                                        <div key={i.name} className={i.name}>
                                            <Skills info={i} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {totalSkills2.map(i => (
                                        <div key={i.name} className={i.name}>
                                            <Skills info={i} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
