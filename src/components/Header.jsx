import '../css/Header.css'
import { Navbar } from './Navbar'
import imgDev from '../assets/image-cv.jpg'

export function Header () {
  return (
    <header id='start'>
      <div className='info-container'>
        <p className='header-info'>
          Hello! My name is Bryan Gordon, front end developer with +2 years of experience developing websites. I'm form Ecuador and I speak Spanish and English.
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
