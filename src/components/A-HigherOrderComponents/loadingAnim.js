import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

export default class loadingAnim extends Component {

    render(){
        return (
            <div className={css(st.outerArea)}>
                {/* <img src='https://png.icons8.com/color/1600/spinner-frame-7.png' alt='' className={css(st.imgSiz, st.animat)} /> */}
                <FontAwesomeIcon icon={faSpinner} className={css(st.fontAwesDyn, st.animat)} />
                <h1 className={css(st.fontDynamics)}>Loading <span className={css(st.dot1)}>.</span><span className={css(st.dot2)} >.</span><span className={css(st.dot3)} >.</span></h1>
            </div>
        )
    }
}
const opacDot1 = {
    '0%': {
        opacity: 0,
    },
    '25%': {
        opacity: 0.2,
    },
    '50%': {
        opacity: 1,
    },
    '75%': {
        opacity: 1,
    },
    '100%': {
        opacity: 1,
    }
}
const opacDot2 = {
    '0%': {
        opacity: 0,
    },
    '25%': {
        opacity: 0,
    },
    '50%': {
        opacity: 0,
    },
    '75%': {
        opacity: 1,
    },
    '100%': {
        opacity: 1,
    }
}
const opacDot3 = {
    '0%': {
        opacity: 0,
    },
    '25%': {
        opacity: 0,
    },
    '50%': {
        opacity: 0,
    },
    '75%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
}
const animKeyFrames = {
    'from': { transform: 'rotate(0deg)', },
    'to': { transform: 'rotate(360deg)', },
}
const st = StyleSheet.create({
    outerArea: {
        // margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    fontAwesDyn: { 
        fontSize: '100px',
        color: 'rgba(51, 0, 204, 0.9)',
        // textShadow: '1px 1px 1px',
    },
    imgSiz: { 
        width: '60%',
        color: 'rgba(51, 0, 204, 0.9)',
        // textShadow: '1px 1px 1px',
        // boxShadow: '1px 1px 3px'
    },
    fontDynamics: {
        fontSize: '50px',
        color: 'linear-gradient(to left, rgba(51, 0, 0, 0.9), rgba(51, 0, 51, 0.9), rgba(51, 0, 102, 0.9), rgba(51, 0, 153, 0.9), rgba(51, 0, 204, 0.9), rgba(51, 0, 255, 1))',
        
        // textShadow: '2px 2px', 
        textShadow: '2px 2px rgba(51, 0, 0, 0.9)', 
        // 'linear-gradient(to left, rgba(51, 0, 0, 0.9), rgba(51, 0, 51, 0.9), rgba(51, 0, 102, 0.9), rgba(51, 0, 153, 0.9), rgba(51, 0, 204, 0.9), rgba(51, 0, 255, 1))',
        // color: 'red',
    },
    tempBord: {
        border: '2px solid black'
    }, 
    animat: {
        animationName: animKeyFrames,
        animationDuration: '2s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    },
    dot1: {
        animationName: opacDot1,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
    },
    dot2: {
        animationName: opacDot2,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
    },
    dot3: {
        animationName: opacDot3,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
    },
})
