import NavItem from "./navItem"
const NavList = (props) => {
    console.log(props)
    return (
        <ul className="navigation__items" role="menubar">
            <NavItem link="/About" name="About" click={props.click} />
            <NavItem link="/Location" name="Location" click={props.click} />
            <NavItem link="/Careers" name="Careers" click={props.click} />
        </ul>
    )
}
export default NavList