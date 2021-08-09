import { useState } from 'react'
import { Link } from 'react-router-dom'
import BtnScoot from './BtnScoot'
import Hamburger from '../../../assets/icons/hamburger.svg'
import Close from '../../../assets/icons/close.svg'
import Logo from '../../../assets/logo.svg'
import NavList from './navList'
const Navigation = () => {
    const [menu, setMenu] = useState(true)

    const handleClick = () => {
        setMenu(!menu)
        console.log("button clicked")
    }

    const trial = document.querySelector;
    console.log(typeof trial)
    return (
        <nav className="nav" role="navigation" aria-label="main navigation">
            {/*Opening and closing the menu */}
            <div className="menu__control">
                <button className="show__menu" aria-label="open navigation" aria-expanded="false" onClick={handleClick}>
                    <img className="menu__img" src={Hamburger} alt="" />
                </button>
                <button className="close__menu" aria-label="close the navigation" aria-expanded="true">
                    <img className="menu__img" src={Close} alt="" />
                </button>
            </div>
            {/* ---------------------------------*/}

            {/*Company logo */}
            <div className="logo__wrapper">
                <Link to="/" className="logo--btn">
                    <img src={Logo} alt="Welcome to scoot international" />
                </Link>
            </div>
            {/* ---------------------------------*/}

            {/*Modal and navigation list items*/}
            <div className={`modal__container ${menu ? "hide__modal" : ""} `}>
                <NavList />
                <BtnScoot />
            </div>
            {/* ---------------------------------*/}
        </nav>

    )
}
export default Navigation