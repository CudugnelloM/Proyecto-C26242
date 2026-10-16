import { Link } from  "react-router-dom"
import logo from '../../assets/logo.png'
import './Header.css'
import { Nav } from '../Nav/nav.jsx'

export const Header = () => {
  return (
    <header>
        <div className="logo-container"> 
          <Link to="/">
            <img src={logo} alt="Logo react"/>
            <span>Shop ku</span>
          </Link>  
        </div>
        <Nav />
    </header>
  );
};