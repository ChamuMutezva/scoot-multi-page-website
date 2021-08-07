import NavItem from "./navItem"
const NavList = () => {
    return (
        <ul className="navigation__items" role="menubar">
            <NavItem link="/About" name="About" />
            <NavItem link="/Location" name="Location" />
            <NavItem link="/Careers" name="Careers" />
        </ul>
    )
}
export default NavList