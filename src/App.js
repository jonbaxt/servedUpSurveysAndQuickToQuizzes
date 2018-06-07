import React, { Component } from 'react';
import Route from './route';
// import { connect } from 'react-redux';

import NavMenu from './components/NavMenu/NavMenu';
// import { toggleLoginPage } from './ducks/reducer'

import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'



import './reset.css';
import './App.css';

class App extends Component {

  //  { this.props.toggleLoginPage(!this.props.currentPageIsLoginPage)}
  // firstToggle = () => {return this.props.toggleLoginPage(!this.props.currentPageIsLoginPage)}
  // componentDidMount(){
  //   this.props.toggleLoginPage(!this.props.currentPageIsLoginPage)
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
//     currentPageIsLoginPage: state.currentPageIsLoginPage
//   }
// }
// export default connect( mapStateToProps, { toggleLoginPage } )(App);
export default App;
