import React from 'react'
import { getPagination } from '../../utils/pages'

export default function Pagination({totalPages, page, changePage}) {
	const pagesArray = getPagination(totalPages)

	return (
		<div className='page-btns'>
			{
				pagesArray.map(p => 
					<span
						onClick={() => changePage(p)}
						key={p}
						className={p === page ? 'page-btn page-btn__current' : 'page-btn'}
					>
						{p}
					</span>
				)
			}
		</div>
	)
}
