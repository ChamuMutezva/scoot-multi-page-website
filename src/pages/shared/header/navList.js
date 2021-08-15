import NavItem from "./navItem"
const NavList = (props) => {
    console.log(props)
    return (
        <ul className="navigation__items" role="menubar">
            <li className="nav__item">
                <NavItem link="/About"
                    name="About"
                    click={props.click} />
            </li>
            <li className="nav__item">
                <NavItem link="/Location"
                    name="Location"
                    click={props.click} />
            </li>
            <li className="nav__item">
                <NavItem link="/Careers"
                    name="Careers"
                    click={props.click} />
            </li>
        </ul>
    )
}
export default NavList