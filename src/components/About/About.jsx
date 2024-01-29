import './about.css'
import ASSETS from '../../assets/Assets'

export default function About() {
  return (
    <section id='about'>
      <div className='about'>
        <div className='about-container'>
          <div className='image-side'>
            <img className='image-primary' src={ASSETS.about_primary} />
            <img className='image-secondary' src={ASSETS.about_secondary} />
            <span>
              <img src={ASSETS.about_rotating} />
            </span>
          </div>
          <div className='text-side'>
            <h3>About Me</h3>
            <h4>Full Stack Developer based in Jaipur, Rajasthan. 📍</h4>
            <p>Hi, my name is Aman, and I am a Full Stack Developer. My passion is to create apps with cleaner UI and better UX for my users.
              <br />
              <br />
              My main stack for web apps is MongoDB, ExpressJS, ReactJS, & NodeJS, and for android apps Java/Kotlin & Android Studio. I also have experience in Python, C / C++, and Java.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
