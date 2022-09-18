import Banner from '../img/Logo.png';
import Logo from '../img/Onlylogo.png';


function Navbar(){
    return(
        <div className="hero">
            <img id="navbarimg" src={Banner} alt="" />
            <img id="onlylogo" src={Logo} alt="" />
        </div>

    )
}

export default Navbar;