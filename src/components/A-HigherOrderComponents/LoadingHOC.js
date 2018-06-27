import React, { Component } from 'react';
import LoadingAnim from './loadingAnim';

export default function LoadingHOC(WrappedComponent) {
    return class extends Component {

    render(){
        return(
            <div>
                {/* { this.props.loading ? <h1>...loading page</h1> : <WrappedComponent {...this.props} />} */}
                { this.props.loading ? <LoadingAnim /> : <WrappedComponent {...this.props} />}
            </div>
        )
    }
}

}