import Nav from "./Nav";
import logo from '../assets/Logo.svg'
const Header = ()=>{
    return (<header>
        {/* <Logo/> */}
        <img src={logo} alt="Little lemon's logo" height={76} className="navbar-logo"/>
        <Nav/>
    </header>)
};

export default Header;