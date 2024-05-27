import { Link } from "react-router-dom"
import logo from '../../images/logo.png'

import { Navbar, Img, Paginas } from '../Styles/Header'


const Header = () => {
    return (
        <Navbar>
            <Link to='/' ><Img src={logo} alt="#" /></Link>
            <Paginas>
                <Link className="linkNav" to='/'> Home </Link>
                <Link className="linkNav" to='/sobre'> Sobre </Link>
                <Link className="linkNav" to='contato'> Contato </Link>
            </Paginas> 
        </Navbar>
    )
}

export default Header;