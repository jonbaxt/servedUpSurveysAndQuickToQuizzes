import React, { Component } from 'react';
// import cup from '../../resources/Pictures/teaCupDrawing.jpg'
// import People from './People';

export default function LoadingHOC(WrappedComponent) {
    return class extends Component {
//     constructor(){
//     super()
//     this.state= {

//     }
// }
    render(){
        return(
            <div>

                {/* { this.props.loading ? <h1>ITS THE END!</h1> : <WrappedComponent {...this.props} />} */}
                {/* { this.props.loading ? <img src={cup} alt='' /> : <WrappedComponent {...this.props} />} */}
                {/* { this.props.loading ? '...loading' : <WrappedComponent {...this.props} />} */}
                { this.props.loading ? <h1>...loading page</h1> : <WrappedComponent {...this.props} />}
            </div>
        )
    }
}

}