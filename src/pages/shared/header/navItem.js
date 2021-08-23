import { Link } from 'react-router-dom'
const NavItem = (props) => {
    const focused = props.focused ? "focused--btn" : ""
    return (
        <Link className={`nav__item--btn ${focused}`}
            to={props.link} 
            onClick={props.click}>
            {props.name}
        </Link>

    )
}
export default NavItem