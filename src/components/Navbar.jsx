import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <nav id='navbar' className='nav-container'>
      <ul className='container-items'>
        <li className='navbar-items'>
          <NavLink to='/' className='link'>Home</NavLink>
        </li>
        <li className='navbar-items'>
          <NavLink to='/personal-information' className='link'>Personal Information</NavLink>
        </li>
      </ul>
    </nav>
  )
}
