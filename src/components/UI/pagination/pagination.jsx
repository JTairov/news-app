import React from 'react'
import { Button } from 'semantic-ui-react'
import { getPagination } from '../../utils/pages'

export default function Pagination({totalPages, page, changePage}) {
	const pagesArray = getPagination(totalPages)

	return (
		<div className='page-btns'>
			{
				pagesArray.map(p => 
					<Button
						onClick={() => changePage(p)}
						key={p}
						color={p === page ? 'purple': ''}
					>
						{p}
					</Button>
				)
			}
		</div>
	)
}
