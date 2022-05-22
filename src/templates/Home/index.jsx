import './index.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../Posts';
import { Button } from '../../Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
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



  render() {
    const { posts, allPosts, postsPerPage, page } = this.state
    const disabled = page + postsPerPage >= allPosts.length;
    return (
      <div className='App'>
        <div className="container">
          <Posts posts={posts} />
          <Button
            disabled={disabled}
            onClick={this.loadMorePosts}
          />
        </div>
      </div>
    )
  }
}
