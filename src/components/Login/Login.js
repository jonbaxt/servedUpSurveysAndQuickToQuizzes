import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setCurrentPathname } from '../../ducks/reducer';
import { faCoffee, faRoad } from '@fortawesome/free-solid-svg-icons';
// import faRoad from '@fortawesome/fontawesome-free-solid/faRoad'
// import faArrowAltCircleUp from '@fortawesome/fontawesome-free-regular/f0aa'
// import faArrowAltCircleUp from '@fortawesome/fontawesome-free-regular/fa-arrow-circle-up'

// function Login(props) {
class Login extends React.Component {

    componentDidMount() {
        // console.log(this.props)
        setLoginPath(this.props)
    }

    render() {

        return (
            <div className={css(Styles.outer, Styles.fuzzIn)}>
                <div className={css(Styles.mainContainer, Styles.fuzzIn)}>
                    <h1 className={css(Styles.smallestFont, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Welcome to</h1>

                    <h1 className={css(Styles.margins, Styles.smallestFont, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Served Up Surveys</h1>

                    <FontAwesomeIcon className={css(Styles.twirlyText, Styles.twirlyTextTablet, Styles.twirlyTextLaptop, Styles.twirlyTextBiggest, Styles.hoverFont, Styles.fontAwesSize, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} icon={faCoffee} />

                    <h1 className={css(Styles.smallestFont, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >And</h1>

                    <h1 className={css(Styles.smallestFont, Styles.margins, Styles.tabletSizeFont, Styles.smallLaptopSizeFont, Styles.SizeFont)} >Quick to Quizzes</h1>

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
        transform: 'translate(-80px)'
    },
    '50%': {
        transform: 'translate(0px)'
    },
    '100%': {
        transform: 'translate(80px)'
    }
};
const translateKeyframes2 = {
    '0%': {
        transform: 'translate(-150px)'
    },
    '25%': {
        transform: 'translate(-75px)'
    },
    '50%': {
        transform: 'translate(0px)'
    },
    '75%': {
     transform: 'translate(75px)'
    },
    '100%': {
        transform: 'translate(150px)'
    }
};
const translateKeyframes3 = {
    '0%': {
        transform: 'translate(-190px)'
    },
    '50%': {
        transform: 'translate(0px)'
    },
    '100%': {
        transform: 'translate(190px)'
    }
};
const translateKeyframes4 = {
    '0%': {
        transform: 'translate(-250px)'
    },
    '50%': {
        transform: 'translate(0px)'
    },
    '100%': {
        transform: 'translate(250px)'
    }
};
const opacityKeyframes = { '0%': { opacity: 0 }, '5%': { opacity: 1 }, '95%': { opacity: 1 }, '100%': { opacity: 0 } };
const initialOpacityKeyframes = { 'from': { opacity: 0, }, 'to': { opacity: 1, } }
const initialTranslateKeyframes = { '0%': { transform: 'translateY(100px)' }, '100%': { transform: 'translateY(0px)' } }

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
        animationDuration: '4s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        transition: '1s ease all',
    },
    twirlyTextTablet: {
        '@media (min-width: 490px)': {
        animationName: [translateKeyframes2, opacityKeyframes],
        transition: '1s ease all',
        }
    },
    twirlyTextLaptop: {
        '@media (min-width: 700px)': {
        animationName: [translateKeyframes3, opacityKeyframes],
        transition: '1s ease all',
        }
    },
    twirlyTextBiggest: {
        '@media (min-width: 1400px)': {
        animationName: [translateKeyframes4, opacityKeyframes],
        transition: '1s ease all',
        }
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
    loginButton: {
        width: '70px',
        height: '50px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10%',
        background: 'rgb(173, 216, 230)',  //Rgb of LightBlue
        color: 'white',
        fontSize: '25px',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
        transition: '1s ease all',
    },
    tabletSizeButton: {
        '@media (min-width: 490px)': {
            width: '90px',
            height: '70px',
            fontSize: '35px',
            transition: '1s ease all',
        }
    },
    smallLaptopSizeButton: {
        '@media (min-width: 700px)': {
            width: '100x',
            height: '80px',
            fontSize: '40px',
            transition: '1s ease all',
        }
    },
    SizeButton: {
        '@media (min-width: 1400px)': {
            width: '110px',
            height: '90px',
            fontSize: '45px',
            transition: '1s ease all',
        }
    },
    smallestFont: {
        fontSize: '25px',
        transition: '1s ease all',
    },
    tabletSizeFont: {
        '@media (min-width: 490px)': {
            fontSize: '35px',
            transition: '1s ease all',
        }
    },
    smallLaptopSizeFont: {
        '@media (min-width: 700px)': {
            fontSize: '60px',
            transition: '1s ease all',
        }
    },
    SizeFont: {
        '@media (min-width: 1400px)': {
            fontSize: '90px',
            transition: '1s ease all',
        }
    },
})

function mapStateToProps(state) {
    return {
        pathnameCurrent: state.pathnameCurrent
    }
}

export default connect(mapStateToProps, { setCurrentPathname })(Login);