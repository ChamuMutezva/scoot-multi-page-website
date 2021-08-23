import { useState } from 'react'
import { Link } from 'react-router-dom'
//import { gsap } from 'gsap'
//import { ScrollTrigger } from "gsap/ScrollTrigger"
import BtnScoot from './BtnScoot'
import Hamburger from '../../../assets/icons/hamburger.svg'
import Close from '../../../assets/icons/close.svg'
import Logo from '../../../assets/logo.svg'
import NavList from './navList'

const Navigation = () => {
    const [menu, setMenu] = useState(true)
    // const animate = useRef()
    // gsap.registerPlugin(ScrollTrigger);
  

    const handleClick = (evt) => {
        const btn = document.querySelector(".show__menu")
        const attr = btn.getAttribute("aria-expanded");
        setMenu(!menu)
        
        if (attr === "false") {
            btn.setAttribute("aria-expanded", "true")
        } else {
            btn.setAttribute("aria-expanded", "false")
        }
        /*  if (menu) {
              gsap.to(animate.current, {y: 10})
          } else{
              gsap.to(animate.current, {y: -10})
          }
          */


    }

    return (
        <nav className="nav" aria-label="main navigation">
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
                <Link to="/" 
                aria-label="homepage"                                
                 className="logo--btn">
                    <img src={Logo} alt="Welcome to scoot international" />
                </Link>
            </div>
            {/* ---------------------------------*/}

            {/*Modal and navigation list items*/}
            <div className={`modal__container ${menu ? "hide__modal" : ""} `}>
                <NavList click={handleClick} />
                <BtnScoot href="#sign" title="Get Scootin" />
            </div>
            {/* ---------------------------------*/}
        </nav>

    )
}
export default Navigation