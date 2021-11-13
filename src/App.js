import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="App" className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Inventory Management</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
