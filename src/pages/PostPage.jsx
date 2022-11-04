import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/loader'
import useFetching from '../hooks/useFetching'

export default function PostPage() {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPost, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComments, commentsLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPost(params.id)
		fetchComments(params.id)
	}, [])
	return (
		<div className='postPage'>
			<h1>Ты перешёл на страницу поста {params.id}</h1>
			{
				isLoading ?
				<Loader/> :
				<div>{post.id} {post.title}</div>
			}
			<h1>Комментарии</h1>
			{
				commentsLoading ?
				<Loader/> :
				<div>
					{comments.map(c => 
						<div className='comment' key={c.id}>
							<h5>{c.email}</h5>
							<div>{c.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	)
}
