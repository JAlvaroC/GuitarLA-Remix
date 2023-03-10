import { Link} from '@remix-run/react'
// import React from 'react'
// import React from 'react'
import logo from "../../public/img/logo.svg";
import Navegacion from './navegacion';

function Header() {

  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link className='logo'
        to="/"
        >
          <img src={logo} alt="Imagen logo" />
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header