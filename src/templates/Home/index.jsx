import './index.css';
import { useCallback, useEffect, useState } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../Posts';
import { Button } from '../../Button';
import { Message } from '../../Message'
import { TextInput } from '../../TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2)
  const [searchText, setSearcText] = useState('');
  
  const handleLoadPosts = useCallback( async (page,postsPerPage) => {
    const postAndPhoto = await loadPosts();
    setPosts(postAndPhoto.slice(page, postsPerPage));
    setAllPosts(postAndPhoto.slice(page, postsPerPage))
    setAllPosts(postAndPhoto);
  },[])

  useEffect(() => {
    handleLoadPosts(0,postsPerPage);
  }, [handleLoadPosts,postsPerPage])

  const handleFilterPost = (e) => {
    const { value } = e.target
    setSearcText(value)
  }

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage)
  }

  const disabled = page + postsPerPage >= allPosts.length;

  const filterTitle = !!searchText ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchText.toLocaleLowerCase()
      )
    })
    : posts

  return (
    <div className='App'>
      <div className="container">
        {!!searchText && (
          <Message message={`Buscando: ${searchText}`} />
        )}
        <TextInput
          handleFilterPost={handleFilterPost}
          searchText={searchText}
        />
        {filterTitle.length > 0 ?
          <Posts posts={filterTitle} />
          : <Message message="Nenhuma resultado encontrado" />
        }
        {!searchText && (
          <Button
            disabled={disabled}
            onClick={loadMorePosts}
          />
        )}
      </div>
    </div>
  )


}
