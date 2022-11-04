import React, { useContext } from 'react'
import MyButton from '../components/UI/button/Button'
import MyInput from '../components/UI/input/Input'
import { AuthContext } from '../context'

export default function Login() {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	function login(e) {
		e.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}

	return (
		<div className='authorisation'>
			<h1 className='authorisation__heading'>Страница авторизации</h1>
			<form onSubmit={login} className='authorisation__form'>
				<MyInput type='text' placeholder='Логин' className='authorisation__input'/>
				<MyInput type='text' placeholder='Пароль' className='authorisation__input'/>
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}
