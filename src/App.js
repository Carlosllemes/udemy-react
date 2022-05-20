import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'carlos 1',
          body: 'corpo 1'
        },
        {
          id: 2,
          title: 'carlos 2',
          body: 'corpo 2'
        },
        {
          id: 3,
          title: 'carlos 3',
          body: 'corpo 3'
        }
      ]
    }
  }

  render() {
    const { posts } = this.state
    return (
      <div className='App'>
        {posts.map(posts =>
        (
          <div key={posts.id}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        )
        )}
      </div>
    )
  }
}
export default App;
