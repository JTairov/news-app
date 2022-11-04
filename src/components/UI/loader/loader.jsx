import React from 'react'
import { Loader } from 'semantic-ui-react'
import classes from './Loader.module.css'

export default function MyLoader() {
	return (
		<div className={classes.loaderBlock}>
			<Loader active inline='centered' size='huge'>Loading</Loader>
		</div>
	)
}

// <div className={classes.loaderBlock}>
	// 	<div className={classes.loader}></div>
	// </div>