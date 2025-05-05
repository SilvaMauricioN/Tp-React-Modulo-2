import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/detalle">Detalle de Producto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react'
// import {Link} from 'react-router-dom'
// 
// const Navbar = () => {
//   return (
//     <header>
//         <h2>Fake Store</h2>
//         <nav>
//             <Link to={'/'}>Inicio</Link>
//             <Link to={'/contactos'}>Contactos</Link>
//         </nav>
//     </header>
//   )
// }
// 
// export default Navbar