import './App.css';
import { Component } from 'react';

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
    const { posts, count } = this.state
    return (
      <div className='App'>
        <div className="container">
          <div className="row">

            {posts.map(posts =>
            (
              <div key={posts.id} className="col-sm">
                <div className="card">
                  <img className="card-img-top" src={posts.cover} alt={posts.title} title={posts.title} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
