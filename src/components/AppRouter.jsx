import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router/router'

export default function AppRouter() {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	return (
		isAuth ?
		<Routes>
			{privateRoutes.map(route => 
				<Route 
					element={route.element}
					path={route.path}
					key={route.path}
				/>
			)}
		</Routes> :
		<Routes>
			{publicRoutes.map(route => 
				<Route 
					element={route.element}
					path={route.path}
					key={route.path}
				/>
			)}
			<Route path='/*' element={<Login/>}/>
		</Routes>
	)
}
