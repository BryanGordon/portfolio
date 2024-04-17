import '../css/Header.css'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { Navbar } from './Navbar'
import imgDev from '../assets/image-cv.jpg'

export function Header () {
  return (
    <header id='start'>
      <div className='info-container'>
        <p className='header-info'>
          Hello! My name is Bryan Gordon, front end developer with +2 years of experience developing websites. I'm form Ecuador and I speak Spanish and English.
          <div className='icon'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bryan-gordon-9ab303220'>
              <IconBrandLinkedin className='icon-linke' />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/BryanGordon'>
              <IconBrandGithub className='icon-git' />
            </a>
          </div>
        </p>
        <div className='img-container-header'>
          <img src={imgDev} alt='Bryan Gordon portfolio image' />
        </div>
      </div>
      <div className='navbar-container'>
        <Navbar />
      </div>
    </header>
  )
}
