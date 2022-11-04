import React from 'react'
import Post from './Post'

export default function PostList({posts, title, remove}) {
	if (!posts.length) {
		return (
			<h1 className='not-found'>
				Посты не найдены...
			</h1>
		)
	}

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			{posts.map((post, index) =>
				<Post post={post} key={post.id} number={index + 1} remove={remove}/>
			)}
		</div>
	)
}
