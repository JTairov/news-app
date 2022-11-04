import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/Button'

export default function Post({ post, number, remove }) {
	const navigate = useNavigate()

	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{post.id}. {post.title}</strong>
				<p>
					{post.body}
				</p>
			</div>
			<div className='post__btns'>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
				<MyButton onClick={() => navigate(`/posts/${post.id}`)} style={{marginTop: '10px'}}>Открыть</MyButton>
			</div>
		</div>
	)
}
