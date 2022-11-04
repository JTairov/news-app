import React from 'react'
import classes from './Button.module.css'

export default function MyButton({children, ...props}) {
	return (
		<button {...props} className={classes.Button}>
			{children}
		</button>
	)
}
