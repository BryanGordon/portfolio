import { IconBrandLinkedin } from '@tabler/icons-react'

import '../css/Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='container-footer'>
        <a className='link-autor' href='#start'>
          <label className='footer-autor'>Bryan Gordon</label>
        </a>
        <a className='link-footer' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bryan-gordon-9ab303220'>
          <IconBrandLinkedin />
        </a>
      </div>
    </footer>
  )
}
