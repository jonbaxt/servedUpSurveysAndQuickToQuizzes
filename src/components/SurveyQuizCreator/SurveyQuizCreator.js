import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

function SurveyQuizCreator(props) {
    // console.log(props)
        return (
            <div className={css(createStartPageStyle.mainCreateHome, createStartPageStyle.pageStart)} >
                <div className={css(createStartPageStyle.titles)} >
                <h1 className={css(createStartPageStyle.normalH1, createStartPageStyle.tabletH1, createStartPageStyle.laptopH1, createStartPageStyle.biggestH1)}>Quiz/Survey Creator</h1>
                <br /><br />
                <h3  className={css(createStartPageStyle.normalH3, createStartPageStyle.tabletH3, createStartPageStyle.laptopH3, createStartPageStyle.biggestH3)} >Quiz or Survey?</h3>
                </div>
                <br /><br /><br /><br />
                <div className={css(createStartPageStyle.buttArea)} >
                    <Link to={`/createnew/${props.match.params.currentUserId}/quiz/quizsetup`} className={css(createStartPageStyle.removeLine)} >
                    <span className={css(createStartPageStyle.buttDesign, createStartPageStyle.tabletButt, createStartPageStyle.laptopButt, createStartPageStyle.biggestButt, createStartPageStyle.buttDesignHover)}>Quiz</span>
                    </Link>
                    <Link to={`/createnew/${props.match.params.currentUserId}/survey/surveysetup`} className={css(createStartPageStyle.removeLine)} >
                    <span className={css(createStartPageStyle.buttDesign, createStartPageStyle.tabletButt, createStartPageStyle.laptopButt, createStartPageStyle.biggestButt, createStartPageStyle.buttDesignHover)}>Survey</span>
                    </Link>
                </div>
            </div>
        )
    }
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const createStartPageStyle = StyleSheet.create({
    titles: {
        background: 'linear-gradient(to left,#330000, #330033, #330066, #330099, #3300CC, #3300FF)',
        // borderRadius: '5%',
        // paddingBottom: '5px',
        paddingLeft: '0px',
        paddingRight: '0px',
        margin: '2px',
        marginTop: '0px',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
    },
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainCreateHome: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        transition: '1s ease all',
    },
    constructionBorders: {
        border: '1px solid black',
        transition: '1s ease all',
    },
    buttArea: {
        display: 'flex',
        justifyContent: 'space-around',
        transition: '1s ease all',
    },
    removeLine: {
        textDecorationLine: 'none',
        color: '#00ccff'
    },
    buttDesign: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '80px',
        background: 'rgba(51, 0, 204, 0.9)',
        borderRadius: '5%',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
        transition: '1s ease all',
    },
    tabletButt: {
        '@media (min-width: 490px)': {
            fontSize: '40px',
            width: '110px',
            height: '90px',
            transition: '1s ease all',
        }
    },
    laptopButt: {
        '@media (min-width: 700px)': {
            fontSize: '45px',
            width: '120px',
            height: '100px',
            transition: '1s ease all',
        }
    },
    biggestButt: {
        '@media (min-width: 1400px)': {
            fontSize: '60px', 
            width: '140px',
            height: '120px',
            transition: '1s ease all',
        },
    },
    buttDesignHover: {
        ':hover': {
            background: 'rgba(51, 0, 51, 0.9)',
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.8)',
            transition: '1s ease all',
            color: 'rgba(0, 204, 255, 0.8)',
        }
    },
    normalH1: {
        fontSize: '40px',
        transition: '1s ease all',
    },
    tabletH1: {
        '@media (min-width: 490px)': {
            fontSize: '50px',
            transition: '1s ease all',
        }
    },
    laptopH1: {
        '@media (min-width: 700px)': {
            fontSize: '60px',
            transition: '1s ease all',
        }
    },
    biggestH1: {
        '@media (min-width: 1400px)': {
            fontSize: '70px',
            transition: '1s ease all',
        }
    },
    normalH3: {
        fontSize: '20px',
        transition: '1s ease all',
    },
    tabletH3: {
        '@media (min-width: 490px)': {
            fontSize: '30px',
            transition: '1s ease all',
        }
    },
    laptopH3: {
        '@media (min-width: 700px)': {
            fontSize: '40px',
            transition: '1s ease all',
        }
    },
    biggestH3: {
        '@media (min-width: 1400px)': {
            fontSize: '50px',
            transition: '1s ease all',
        }
    },
})

export default SurveyQuizCreator;