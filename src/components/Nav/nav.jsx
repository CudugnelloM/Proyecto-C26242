import { Link } from "react-router-dom"
import './nav.css'
import cartIcon from '../../assets/carro-de-la-compra.png';

export const Nav = ({ cartCount = 0}) => {
  return (
  <nav className="nav-bar">  
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/carrito" className="nav-link cart-link">
         <img src={cartIcon} alt="Carrito" className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
      </li>
    </ul>
  </nav>
 );
};