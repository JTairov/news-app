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
			<h1 className='postPage__heading'>Post id: {params.id}</h1>
			{
				isLoading ?
				<Loader/> :
				<div className='postPage__body'>{post.id} {post.title}</div>
			}
			<h2 className='postPage__subHeading'>Комментарии</h2>
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
