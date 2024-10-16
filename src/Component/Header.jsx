import Logo from '../assets/images/Logo.svg'
import './Header.css'
const Header =() => {
    return(
        <header>
            <div className='LeftNav'>
            <img src={Logo} alt="logo" />
            <select name="" id="">
                <option value="">Features</option>
            </select>
            <select name="" id="">
                <option value="">Company</option>
            </select>
            <a href=''>Careers</a>
            <a href=''>About</a>
            </div>

            <div className='RightNav'>
                <button id='logBtn'>Log In</button>
                <button id='regBtn'>Register</button>
            </div>
        </header>

    )
}

export default Header