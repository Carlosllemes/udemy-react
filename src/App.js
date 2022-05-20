import './App.css';
import { Component } from 'react';
import { PostCard } from './PostCard';

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((posts, index) => {
      return { ...posts, cover: photosJson[index].url }
    })
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state
    return (
      <div className='App'>
        <div className="container">
          <div className="row">

            {posts.map(posts =>
            (
              <PostCard
                key={posts.id}
                id={posts.id}
                cover={posts.cover}
                title={posts.title}
                body={posts.body}
              />
            )
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
