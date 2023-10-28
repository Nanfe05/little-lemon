
import Logo from '../assets/LogoFooter.png'

const Footer = ()=>{
    return (<footer>
        <img src={Logo} alt="Little's Lemon logo" width={160} className='footer-logo'/>
        <section className='footer-section'>
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
        <section className='footer-section'>
            <h1>Contact</h1>
            <ul>
            <li><a href="/">Address</a></li>
            <li><a href="/about">Phone Number</a></li>
            <li><a href="/menu">Email</a></li>
            </ul>
        </section>
        <section className='footer-section'>
            <h1>Social Media Links</h1>
            <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/about">Instagram</a></li>
            <li><a href="/menu">Youtube</a></li>
            </ul>
        </section>
    </footer>)
};

export default Footer;