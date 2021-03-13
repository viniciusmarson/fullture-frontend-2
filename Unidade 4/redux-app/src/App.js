import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { clickButton } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input
            onChange={this.inputChange}
            type='text'
            value={inputValue}
          />

          <button onClick={() => clickButton(inputValue)}>
            Click me!
          </button>

          <h1>{newValue}</h1>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps, mapDispatchToProps)(App);