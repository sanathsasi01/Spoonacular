import css from './Navbar.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function openMenu() {
        setIsOpen(!isOpen)
    }
    function closeNav() {
        setIsOpen(!isOpen)
    }
    return (
        <ul className={css.navContainer}>
            <div id={css.navLinks}>
                {isOpen ? <span onClick={openMenu} id={css.hamburg} ><i className="fas fa-times"></i></span> : <span onClick={openMenu} id={css.hamburg} ><i className="fas fa-bars"></i></span>}
                
                <div id={css.brand}>
                    <a href='http://localhost:3000/'>
                        <img alt="brand" src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg"/>
                        <p>Mallu Chef</p>
                    </a>
                </div>
                <Link to='/about' href='http://localhost:3000/' onClick={closeNav} className={css.li} style={isOpen ? {'display':'block'} : null}>About</Link>
                <Link to='/' href='http://localhost:3000/' onClick={closeNav} className={css.li} style={isOpen ? {'display':'block'} : null}>Home</Link>
            </div>
        </ul>
    )
}

export default Navbar;