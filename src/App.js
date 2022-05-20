import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
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
    ],
    count : 0
  }

  timeOutUpdate = null

  componentDidMount() {
    this.handleTimeComponent()
  }

  componentDidUpdate(){
    this.handleTimeComponent()
  }

  componentWillUnmount(){
    clearTimeout(this.timeOutUpdate)
  }

  handleTimeComponent = () =>{
    const { posts, count } = this.state
    posts[0].title = 'Foifoi'
    this.timeOutUpdate = setTimeout(() => {
      this.setState({post:'foifoi', count : count +1})
    }, 1000)
  }

  render() {
    const { posts, count } = this.state
    return (
      <div className='App'>
        {posts.map(posts =>
        (
          <div key={posts.id}>
            <h1>{count}</h1>
            <h1>{posts.title}{posts.body}</h1>
          </div>
        )
        )}
      </div>
    )
  }
}
export default App;
