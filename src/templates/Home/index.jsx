import './index.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../Posts';
import { Button } from '../../Button';
import { Message } from '../../Message'
import { TextInput } from '../../TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchText: ''
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postAndPhoto = await loadPosts();
    this.setState({
      posts: postAndPhoto.slice(page, postsPerPage),
      allPosts: postAndPhoto
    });
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
  const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPost);
    this.setState({ posts, page: nextPage })

  }

  handleFilterPost = (e) => {
    const { value } = e.target
    this.setState({ searchText: value })
  }



  render() {
    const { posts, allPosts, postsPerPage, page, searchText } = this.state
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
            handleFilterPost={this.handleFilterPost}
            searchText={searchText}
          />
          {filterTitle.length > 0 ?
            <Posts posts={filterTitle} />
            : <Message message="Nenhuma resultado encontrado" />
          }
          {!searchText && (
            <Button
              disabled={disabled}
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </div>
    )
  }
}
