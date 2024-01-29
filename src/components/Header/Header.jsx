import './header.css'

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const options = document.querySelector('.header-options-mobile');

    if (options.classList.contains('open')) {
      options.classList.remove('open');
      options.classList.add('close');
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openMenu = () => {
    const options = document.querySelector('.header-options-mobile');
    if (options.classList.contains('open')) {
      options.classList.remove('open');
      options.classList.add('close');
    } else {
      options.classList.add('open');
      options.classList.remove('close');
    }
  }

  return (
    <>
      <div className='header'>
        <div className='header-brand'>
          <p>Aman.dev</p>
        </div>
        <div className='header-options'>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
        <div onClick={() => openMenu()} className='hamburger'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
      <div className='header-options-mobile'>
        <ul>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <div onClick={() => openMenu()} className='close-icon'>
          <span className='cross'></span>
        </div>
      </div>
    </>
  )
}
