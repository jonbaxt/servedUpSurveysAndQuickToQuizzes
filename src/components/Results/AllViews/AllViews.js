import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

function AllViews(props) {
    // console.log(props)
    // console.log(props.match.params.currentUserId)
    return (
        <div className={css(st.pageStart, st.allViewMain, st.titles)}>
            <h1 className={css(st.texCen)} >Results Page</h1>
            <h3 className={css(st.texCen)} >Would you like to see all results for:</h3><br/><br/><br/>
        <div className={css(st.innerArea)} >
            <div>
            <h3 className={css(st.texCen)} >Quizzes</h3><br/>
            <Link to={`/results/quiz/allquizresults`} ><button className={css(st.linkButtons, st.linkHover)}  >Quiz Results</button></Link>
            </div>
            <div>
            <h3 className={css(st.texCen)} >Surveys</h3><br/>
            <Link to={`/results/survey/allsurveyresults`} className={css(st.noLine)}  ><button className={css(st.linkButtons, st.linkHover)}  >Survey Results</button></Link>
            </div>
            </div>
        </div>
    )
}
const initialOpacity = { 'from': { opacity: 0, }, 'to': { opacity: 1, }, }
const st = StyleSheet.create({
    titles: {
        background: 'linear-gradient(to left,#330000, #330033, #330066, #330099, #3300CC, #3300FF)',
        borderRadius: '5%',
        paddingBottom: '5px',
        paddingLeft: '0px',
        paddingRight: '0px',
        margin: '10px',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
    },
    pageStart: {
        animationName: initialOpacity,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    allViewMain: {
        display: 'flex',
        flexDirection: 'column',
    },
    innerArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    texCen: {
        textAlign: 'center',
    },
    linkButtons: {
        width: '110px',
        height: '70px',
        background: 'rgba(0, 204, 255, 0.6)',
        border: 'none',
        borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    linkHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
            transition: '1s all ease',
        },
    },
    noLine: {
        textDecorationUnderline: 'none',
    },
    borderShadow: {
        boxShadow: '5px 10px 8px #330099'
    },
})


export default AllViews;