import './Header.styles.css'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/tech logo.svg";

const Header = () => {
    return (
        <header className="Header">
            <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link> 
        </header>
    )
}

export default Header