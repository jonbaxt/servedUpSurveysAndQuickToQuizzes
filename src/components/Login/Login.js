import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { setCurrentPathname } from '../../ducks/reducer'
import faCofee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faRoad from '@fortawesome/fontawesome-free-solid/faRoad'
// import faArrowAltCircleUp from '@fortawesome/fontawesome-free-regular/f0aa'
// import faArrowAltCircleUp from '@fortawesome/fontawesome-free-regular/fa-arrow-circle-up'

// function Login(props) {
class Login extends React.Component {

    componentDidMount(){
        // console.log(this.props)
        setLoginPath(this.props)
    }

    render() {

        return (
            <div className={css(Styles.outer, Styles.fuzzIn)}>
            <div className={css(Styles.mainContainer, Styles.fuzzIn)}>
                <h1 className={css(Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Welcome to</h1>

                <h1 className={css(Styles.margins, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Served Up Surveys</h1>

                <FontAwesomeIcon className={css(Styles.twirlyText, Styles.hoverFont, Styles.fontAwesSize, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} icon={faCofee} />

                <h1 className={css(Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >And</h1>

                <h1 className={css(Styles.margins, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Quick to Quizzes</h1>

                <FontAwesomeIcon className={css(Styles.margins, Styles.fontAwesSize, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} icon={faRoad} />

                <a href={process.env.REACT_APP_LOGIN} className={css(Styles.noLine)} >
                    <span className={css(Styles.loginButton, Styles.hoverButton, Styles.tabletSizeButton, Styles.smallLaptopSizeButton, Styles.SizeButton)} >Login</span>
                </a>
                </div>
                {/* <span onChange={()=> setLoginPath(props)} ></span> */}
            </div>
        )
    }
}

function setLoginPath(propsPass) {
    propsPass.setCurrentPathname(propsPass.location.pathname)
}
const translateKeyframes = {
    '0%': {
        // transform: 'rotate(0deg)'
        // transform: 'translate(-150px, 0px)'
        transform: 'translate(-150px)'
    },
    '25%': {
        // transform: 'rotate(360deg)'
        // transform: 'translate(0px, 100px)'
        transform: 'translate(-75px)'

    },
    '50%': {
        // transform: 'rotate(0deg)'
        // transform: 'translate(150px, 0px)'
        transform: 'translate(0px)'

    },
    '75%': {
        // transform: 'rotate(360deg)'
        // transform: 'translate(0px, -100px)'
        transform: 'translate(75px)'

    },
    '100%': {
        // transform: 'rotate(-360deg)'
        // transform: 'translate(-150px, 0px)'
        transform: 'translate(150px)'
    }
};
const opacityKeyframes = {
    '0%': {
        opacity: 0
    },
    '5%': {
        opacity: 1

    },
    // '50%': {

    // },
    '95%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
};

const initialOpacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
}
const initialTranslateKeyframes = {
    '0%': {
        transform: 'translateY(100px)'
    },
    '100%': {
        transform: 'translateY(0px)'
    }
}
// const className = css(
//     shouldBeRed() ? styles.red : styles.blue,
//     shouldBeResponsive() && styles.small,
//     shouldBeHoverable() && styles.hover
//   )

const Styles = StyleSheet.create({
    outer: {
        display: 'flex',
        justifyContent: 'center',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to left, rgba(51, 0, 0, 0.9), rgba(51, 0, 51, 0.9), rgba(51, 0, 102, 0.9), rgba(51, 0, 153, 0.9), rgba(51, 0, 204, 0.9), rgba(51, 0, 255, 1))',
        width: '60%',
        padding: '8px',
        borderRadius: '2%',
        boxShadow: '6px 10px 8px rgba(0, 204, 255, 0.4)', 
        // boxShadow: '',
    },
    margins: {
        marginBottom: '15px'
    },
    fontAwesSize: {
        fontSize: '40px'
    },
    noLine: {
        textDecorationLine: 'none'
    },
    loginButton: {
        width: '100px',
        height: '80px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10%',
        background: 'rgb(173, 216, 230)',  //Rgb of LightBlue
        color: 'white',
        fontSize: '25px',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)'
    },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            boxShadow: '6px 10px 8px rgba(0, 204, 255, 0.4)',
            // boxShadow: '4px 8px 6px rgba(0, 204, 255, 0.4), 10px 10px #0fb6e0, 15px 15px rgba(24, 137, 165, 0.8)',
            transition: 'all 0.5s ease'
        }
    },
    twirlyText: {
        animationName: [translateKeyframes, opacityKeyframes],
        // animationName: translateKeyframes,
        animationDuration: '5s',
        // animationDuration: '3s, 1500ms',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
        // animation-iteration-count: initial;
        //   animation-iteration-count: inherit;
        //   animation-iteration-count: unset;
    },
    fuzzIn: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '2s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'initial'
    },
    hoverFont: {
        ':hover': {
            transition: '1s ease',
            color: 'white'
        }

    },
    tabletSizeFont: {
        '@media (min-width: 490px)': {
            fontSize: '50px'
        }
    },
    tabletSizeButton: {
        '@media (min-width: 490px)': {
            width: '130px',
            height: '110px',
            fontSize: '35px'
        }
    },
    smallLaptopSizeFont: {
        '@media (min-width: 700px)': {
            fontSize: '70px'
        }
    },
    smallLaptopSizeButton: {
        '@media (min-width: 700px)': {
            width: '160x',
            height: '110px',
            fontSize: '45px'
        }
    },
    SizeFont: {
        '@media (min-width: 1400px)': {
            fontSize: '90px'
        }
    },
    SizeButton: {
        '@media (min-width: 1400px)': {
            width: '190px',
            height: '140px',
            fontSize: '55px'
        }
    },
})

function mapStateToProps(state) {
    return {
        pathnameCurrent: state.pathnameCurrent
    }
}

export default connect(mapStateToProps, { setCurrentPathname })(Login);