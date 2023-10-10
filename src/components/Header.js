import Nav from "./Nav";
import logo from '../assets/Logo.svg'
const Header = ()=>{
    return (<header>
        {/* <Logo/> */}
        <img src={logo} alt="Little lemon's logo" height={76}/>
        <section>
            <h1>Doormat Navigation</h1>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
            </ul>
        </section>
        <section>
            <h1>Contact</h1>
            <ul>
            <li><a href="/">Address</a></li>
            <li><a href="/about">Phone Number</a></li>
            <li><a href="/menu">Email</a></li>
            </ul>
        </section>
        <section>
            <h1>Social Media Links</h1>
            <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/about">Instagram</a></li>
            <li><a href="/menu">Youtube</a></li>
            </ul>
        </section>
        <Nav/>
    </header>)
};

export default Header;