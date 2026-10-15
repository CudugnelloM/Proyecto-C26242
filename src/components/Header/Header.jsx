import { Link } from  "react-router-dom"
import logo from '../../assets/logo.png'
import './header.css'
import { Nav } from '../Nav/nav.jsx'

export const Header = () => {
  return (
    <header>
        <div className="logo-container"> 
          <Link to="/">
            <img src={logo} alt="Logo react"/>
            <span>Reactiva</span>
          </Link>  
        </div>
        <Nav />
    </header>
  );
};