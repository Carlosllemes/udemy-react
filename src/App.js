import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './Posts';

class App extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhoto = await loadPosts();
    this.setState({ posts: postAndPhoto });
  }

  render() {
    const { posts } = this.state
    return (
      <div className='App'>
        <div className="container">
          <Posts posts={posts} />
        </div>
      </div>
    )
  }
}
export default App;
