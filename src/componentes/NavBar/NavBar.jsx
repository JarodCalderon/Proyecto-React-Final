import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo.png" className='imgLogo' alt="imgLogo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Productos 1 </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Productos 2 </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar