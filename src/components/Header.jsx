import '../css/Header.css'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { Navbar } from './Navbar'
import imgDev from '../assets/image-hap-cv.jpg'

export function Header () {
  return (
    <header id='start'>
      <div className='info-container'>
        <p className='header-info'>
          Hello! My name is <span>Bryan Gordon</span>, front end developer with <span>+3 years of experience</span> developing websites. I'm form Ecuador and I speak <span>Spanish</span> and <span>English</span>.
          <div className='icon'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bryan-gordon-9ab303220'>
              <IconBrandLinkedin className='icon-linke' />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/BryanGordon'>
              <IconBrandGithub className='icon-git' />
            </a>
          </div>
        </p>

        <picture className='img-container-header'>
          <img src={imgDev} alt='Bryan Gordon portfolio image' />
        </picture>
      </div>
      <div className='navbar-container'>
        <Navbar />
      </div>
    </header>
  )
}
