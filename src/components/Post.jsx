import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import MyButton from './UI/button/Button'

export default function Post({ post, number, remove }) {
	const navigate = useNavigate()

	return (
		<Card>
			<div className='post__content'>
				<strong>{post.id}. {post.title}</strong>
				<p>
					{post.body}
				</p>
			</div>
			<div className='post__btns'>
				<MyButton className='btn' color='purple' onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
				<MyButton className='btn' onClick={() => remove(post)} style={{marginTop: '10px'}}>Удалить</MyButton>
			</div>
		</Card>
	)
}
