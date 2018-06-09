import React, { Component } from 'react';
import Route from './route';
import NavMenu from './components/NavMenu/NavMenu';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    fontawesome.library.add(brands, solid)
    return (
      <div className="App">
        <div className='NavArea'>
          <NavMenu />
        </div>
        <div className='RouteArea'>
          {Route}
        </div>
      </div>
    );
  }
}

export default App;
