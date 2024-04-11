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
          <NavLink to='/cv' className='link'>CV</NavLink>
        </li>
      </ul>
    </nav>
  )
}
