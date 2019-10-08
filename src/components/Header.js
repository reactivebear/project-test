import React, {useState, memo} from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'
import { useDispatch } from 'react-redux'
import Href from './buttons/Href'

const Header = () => {
	const dispatch = useDispatch()
	const [userMenu, setUserMenu] = useState(null)
	const toggleMenu = () => {
		if (!userMenu) {
			document.body.addEventListener('click', closeMenu, {once: true})
		}
		setUserMenu(!userMenu)
	}
	const closeMenu = e => {
		if (e && e.target.closest('#navbarDropdown')) {
    	return
    }
    document.body.removeEventListener('click', closeMenu, false)
    setUserMenu(false)
	}
	const handleLogout = () => {
		closeMenu()
		dispatch(logout())
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
			<Link className="navbar-brand fs-15q" to="/">LOGO</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li>
						<Href className="dropdown-item" onClick={handleLogout}>Logout</Href>
					</li>
				</ul>
			</div>
		</nav>
	)
}


export default Header;

