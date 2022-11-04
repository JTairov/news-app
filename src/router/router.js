import Error from "../pages/Error"
import Home from "../pages/Home"
import Login from "../pages/Login"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"

export const privateRoutes = [
	{path: '/home', element:<Home/>},
	{path: '/posts', element:<Posts/>},
	{path: '/*', element:<Home/> },
	{path: '/posts/:id', element:<PostPage/> },
]
export const publicRoutes = [
	{path: '/login', element:<Login/>},
]