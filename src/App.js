import React, { Component } from 'react';
import 'rsuite/styles/index.less';
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
