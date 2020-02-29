import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import NameInput from '../components/NameInput';

class Home extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            lanediff.gg
          </p>
          <NameInput/>
        </header>
      </div>
  );}
}

export default connect()(Home);
