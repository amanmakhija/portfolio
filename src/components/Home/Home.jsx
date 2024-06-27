import { useEffect, useState } from 'react';
import './home.css'
import ASSETS from '../../assets/Assets'

export default function Home() {

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAngle(prevAngle => (prevAngle + 10) % 360);
        }, 100);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    function generateCircularBorderRadius() {
        const stretchFactor = 15; // Adjust the stretch factor as needed
        const x = Math.cos((angle * Math.PI) / 180) * stretchFactor + 50;
        const y = Math.sin((angle * Math.PI) / 180) * stretchFactor + 50;

        return `${x - stretchFactor}% ${100 - x}% ${100 - y}% ${y - stretchFactor}% / ${y}% ${100 - y}% ${100 - x}% ${x}%`;
    }

    return (
        <section id='home'>
            <div className='home'>
                <div className='home-details'>
                    <div className='home-heading'>
                        <p>Full Stack Developer</p>
                        <img src={ASSETS.wave_hand} alt='waving hand' />
                    </div>
                    <div className='home-subheading'>
                        <p>Hi, I am Aman Makhija. A passionate Full-Stack Developer based in Jaipur, Rajasthan. 📍</p>
                    </div>
                    <div className='home-socials'>
                        <ul>
                            <li>
                                <a target='_blank' rel="noreferrer" href='https://linkedin.com/in/aman-makhija/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noreferrer" href='https://github.com/amanmakhija/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{
                    WebkitAnimation: 'morph 8s ease-in-out infinite',
                    animation: 'morph 8s ease-in-out infinite',
                    backgroundImage: `url(${ASSETS.hero})`,
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    border: '3px solid #2d2e32',
                    borderRadius: generateCircularBorderRadius(),
                    height: '25rem',
                    position: 'relative',
                    transition: 'all .2s ease-in-out',
                    width: '25rem',
                }} className='home-hero'></div>
            </div>
            <div className='tech-stack'>
                <p>Tech Stack</p>
                <div className='logos'>
                    <ul>
                        <li><img src='https://skillicons.dev/icons?i=mongodb,express' alt='skill icons' /></li>
                        <li><img src='https://skillicons.dev/icons?i=react,nodejs' alt='skill icons' /></li>
                        <li><img src='https://skillicons.dev/icons?i=js,tailwind' alt='skill icons' /></li>
                        <li><img src='https://skillicons.dev/icons?i=aws,gcp' alt='skill icons' /></li>
                        <li><img src='https://skillicons.dev/icons?i=azure,docker' alt='skill icons' /></li>
                        <li><img src='https://skillicons.dev/icons?i=java,kotlin' alt='skill icons' /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
