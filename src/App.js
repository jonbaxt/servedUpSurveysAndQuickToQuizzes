import React, { Component } from 'react';
import Route from './route';
// import { connect } from 'react-redux';

import NavMenu from './components/NavMenu/NavMenu';
// import { setCurrentPathname } from './ducks/reducer'

import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'



import './reset.css';
import './App.css';

class App extends Component {

  //  { this.props.setCurrentPathname(!this.props.pathnameCurrent)}
  // firstToggle = () => {return this.props.setCurrentPathname(!this.props.pathnameCurrent)}
  // componentDidMount(){
  //   this.props.setCurrentPathname(!this.props.pathnameCurrent)
  // }


  render() {
    fontawesome.library.add(brands, solid)
    
    
    return (
      <div className="App">
        <div className='NavArea'>
        <NavMenu />
        {/* {() => this.firstToggle()} */}
        </div>
        <div className='RouteArea'>
        {Route}
        </div>
      </div>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     pathnameCurrent: state.pathnameCurrent
//   }
// }
// export default connect( mapStateToProps, { setCurrentPathname } )(App);
export default App;
