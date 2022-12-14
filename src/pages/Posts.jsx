import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import MyForm from '../components/Form'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/Button'
import Loader from '../components/UI/loader/loader'
import MyModal from '../components/UI/modal/modal'
import Pagination from '../components/UI/pagination/pagination'
import { getPagesCount } from '../components/utils/pages'
import useFetching from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'
import { usePosts } from '../hooks/usePosts'
import MySelect from '../Select'

export default function Posts() {
	const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({query: '', sort: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()
  
  const [fetchPosts, postsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, postsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])
  
 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton 
        color='purple'
        style={
          {
            marginTop: "15px",
            marginBottom: "15px",
          }
        }
        onClick={() => setModal(true)}
      >
        ?????????????? ????????
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <MyForm createPost={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={setLimit}
        defaultValue='??????-???? ???????????? ???? ????????????????'
        options={[
          {value: 5,name: '5'},
          {value: 10,name: '10'},
          {value: 25,name: '25'},
          {value: -1,name: '???????????????? ??????'},
        ]}
      />
      {postError &&
        <h1>???????????????? ???????????? {postError}</h1> 
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="???????????? ????????????"/>
      <div ref={lastElement}></div>
      {postsLoading && 
        <Loader/>
      }
      <Pagination
        changePage={changePage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}
