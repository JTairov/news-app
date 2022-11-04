import React, { useState } from 'react'
import MyButton from './UI/button/Button'
import MyInput from './UI/input/Input'

export default function MyForm({createPost}) {
	const [post, setPost] = useState({title: '', body: ''})

	const addNewPost = (e) => {
		e.preventDefault()

		const newPost = {
			...post,
			id: Date.now()
		}

		createPost(newPost)

		setPost({title: '', body: ''})
	}

	return (
		<form>
			<MyInput
				className="form__input" 
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type="text"
				placeholder="Заголовок поста"
			/>
			<MyInput
				className="form__input" 
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"
				placeholder="Текст поста"
			/>
			<MyButton onClick={addNewPost}>Добавить пост</MyButton>
		</form>
	)
}
