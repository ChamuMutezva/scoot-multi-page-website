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
    const mediaQuery = window.matchMedia("(max-width: 619px)")
    // const animate = useRef()
    // gsap.registerPlugin(ScrollTrigger);
    // if (!screenWidth.matches) {
    //     return
    // }


    // Tab trapping for screens with the modal box - up to 619px
    function tabTrapper(e) {

        console.log(mediaQuery)
        // tab trapping elements
        if (mediaQuery.matches) {
            const focusedBtns = Array.from(document.querySelectorAll(".focused--btn, .show__menu, .close__menu"))
            // select modal list
            if (focusedBtns.length > 0) {
                const nav = document.querySelector(".nav")
                const firstFocusableElement = focusedBtns[0]
                const lastFocusableElement = focusedBtns[focusedBtns.length - 1]
                console.log(firstFocusableElement)
                console.log(lastFocusableElement)
                console.log(nav)

                document.addEventListener('keydown', function (e) {
                    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                    if (!isTabPressed) {
                        return;
                    }

                    if (e.shiftKey) { // if shift key pressed for shift + tab combination
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus(); // add focus for the last focusable element
                            e.preventDefault();
                        }
                    } else { // if tab key is pressed
                        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                            firstFocusableElement.focus(); // add focus for the first focusable element
                            e.preventDefault();
                        }
                    }
                });

                firstFocusableElement.focus();
            }
        }

        //**************************************************** */

    }

    mediaQuery.addListener(tabTrapper)
    tabTrapper(mediaQuery)

    const handleClick = (evt) => {
        const btn = document.querySelector(".show__menu")
        const attr = btn.getAttribute("aria-expanded");

        setMenu(!menu)
        mediaQuery.addListener(tabTrapper)
        tabTrapper(mediaQuery)

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

    // Tab trapping



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
                    className="logo--btn focused--btn">
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