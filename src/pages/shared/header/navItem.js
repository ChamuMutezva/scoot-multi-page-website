import { Link } from 'react-router-dom'
const NavItem = (props) => {
    return (
        <Link className="nav__item--btn"
            to={props.link} 
            onClick={props.click}>
            {props.name}
        </Link>

    )
}
export default NavItem