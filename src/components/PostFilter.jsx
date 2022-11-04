import React from 'react'
import MySelect from '../Select'
import MyInput from './UI/input/Input'

export default function PostFilter({filter, setFilter}) {
	return (
		<div>
			  <MyInput
          className='filter__input'
          placeholder='Поиск...'
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Сортировать'
          options = {[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По тексту'}
          ]}
        />
		</div>
	)
}
