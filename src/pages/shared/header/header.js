import Hamburger from '../../../assets/icons/hamburger.svg'
import Close from '../../../assets/icons/close.svg'
import Logo  from '../../../assets/logo.svg'
const Navigation = () => {
    return (
        <nav className="nav" aria-label="site">
            {/*Opening and closing the menu */}
            <div className="menu__control">
                <button className="show__menu">
                    <img src={Hamburger} alt="opening the menu" />
                </button>
                <button className="close__menu">
                    <img src={Close} alt="Closing the menu" />
                </button>                
            </div>
            {/* ---------------------------------*/}

            {/*Company logo */}
            <div className="logo__wrapper">
                <a href="/" className="logo--btn">
                    <img src={Logo} alt="Welcome to scoot international" />
                </a>
            </div>
             {/* ---------------------------------*/}

            {/*Modal and navigation list items*/}
            <div className="modal__container">
                <ul className="navigation__items">
                  <li><a href="/">About</a></li>
                  <li><a href="/">Location</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
            </div>
             {/* ---------------------------------*/}
        </nav>

    )
}
export default Navigation