import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this)
    this.state = {
      name: 'Carlos',
      cont: 0
    }
  }

  handlePClick() {
    this.setState({ name: 'Carlos Lemes' })
  }

  handleAClick = (event) => {
    const { cont } = this.state
    event.preventDefault();
    this.setState({cont: cont + 1}) 
    console.log(cont)
  }



  render() {
    const { name, cont } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>

          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          {cont}
          </a>
        </header>
      </div>
    );
  }
}
export default App;
