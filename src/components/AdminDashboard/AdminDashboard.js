import React, { Component } from 'react';

import { connect } from 'react-redux'

import { setCurrentPathname } from '../../ducks/reducer';

class AdminDashboard extends Component {

componentDidMount(){
    if(this.props.pathnameCurrent.length !== 0){
        this.props.setCurrentPathname(this.props.location.pathname)
    }
}
    render(){
        return(
            <div>
                <h1>Admin Dashboard</h1>

                <h2>DashBoard Name</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pathnameCurrent: state.pathnameCurrent
    }
}

let mapDispatchToProps = {
    setCurrentPathname,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);