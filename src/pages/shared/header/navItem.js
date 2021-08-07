import { Link } from 'react-router-dom'
const NavItem = (props) => {
    return (
        <li className="nav__item">          
            <Link className="nav__item--btn" to={props.link} role="menuitem">{props.name}</Link>
        </li>

    )
}
export default NavItem