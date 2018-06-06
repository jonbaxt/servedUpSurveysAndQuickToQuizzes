import React, { Component } from 'react';
import Route from './route';
import NavMenu from './components/NavMenu/NavMenu';

import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'



import './reset.css';
import './App.css';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     onLoginPage: false
  //   }
  // }
  render() {
    fontawesome.library.add(brands, solid)

    // let routeFind = () => {
    //   // if(Route === Route.props.children[0]){
    //   if(Route === Route.props.children[0]){
    //     return 'true'
    //   } else {
    //     return 'false'
    //   }
    // }

    // let nav =
    // console.log(Route)
    // console.log(Route.props.children)
    // console.log(Route.props.children[0].props.path)
    

    return (
      <div className="App">
        <div className='NavArea'>
        <NavMenu />
        </div>
        <div className='RouteArea'>
        {Route}
        {/* {console.log( Route )} */}
        {/* {console.log(routeFind())} */}
        {/* {console.log( this.props )} */}
        </div>
      </div>
    );
  }
}

export default App;
