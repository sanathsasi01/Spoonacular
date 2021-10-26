import css from './Navbar.module.css'
import {useState} from 'react'
// import { Link } from 'react-router-dom'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function openMenu() {
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
                <a href="http://localhost:3000/" className={css.li} style={isOpen ? {'display': 'block'} : null}>Contacts</a>
                <a href='http://localhost:3000/' className={css.li} style={isOpen ? {'display':'block'} : null}>About</a>
                <a href='http://localhost:3000/'  className={css.li} style={isOpen ? {'display':'block'} : null}>Home</a>
            </div>
        </ul>
    )
}

export default Navbar;