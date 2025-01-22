import '../css/Footer.css'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

export function Footer () {
  return (
    <footer>
      <div className='container-footer'>
        <a className='link-autor' href='#start'>
          <label className='footer-autor'>Bryan Gordon</label>
        </a>
        <div className='icons'>
          <a className='link-footer-linke' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bryan-gordon-9ab303220'>
            <IconBrandLinkedin />
          </a>
          <a className='link-footer-github' target='_blank' rel='noreferrer' href='https://github.com/BryanGordon'>
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}
