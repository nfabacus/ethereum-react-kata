import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './ethereum/web3';
import inbox from './ethereum/inbox';

class App extends Component {
  state = {
    message: '',
    inputValue: ''
  }

  async componentDidMount() {
    const message = await inbox.methods.message().call();
    this.setState({ message })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await inbox.methods.setMessage(this.state.inputValue).send({ from: accounts[0] })
    this.setState({ message: "" })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React on Ethereum!</h1>
        </header>
        <p className="App-intro">
          {this.state.message}
        </p>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
