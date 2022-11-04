import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/Button'

export default function Navbar() {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	function logout() {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className='navbar'>
			<div className='navbar__actions'>
				<div>
					<Link to='/home' className='navbar__link'>Home</Link>
					<Link to='/posts' className='navbar__link'>Posts</Link>
				</div>
				<MyButton onClick={logout} className='btn'>Выйти</MyButton>
			</div>  
		</div>
	)
}
