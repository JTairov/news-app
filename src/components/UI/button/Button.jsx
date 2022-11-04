import React from 'react'
import { Button } from 'semantic-ui-react'
import classes from './Button.module.css'

export default function MyButton({children, ...props}) {
	return (
		<Button {...props}>
			{children}
		</Button>
		// <button {...props} className={classes.Button}>
		// 	{children}
		// </button>
	)
}
