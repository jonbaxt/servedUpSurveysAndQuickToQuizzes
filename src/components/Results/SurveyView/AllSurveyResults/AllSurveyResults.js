import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { getSurveyResultsUltraJoinedTable } from '../../../../ducks/reducer';
import Survey1ResultsBuild from './Survey1ResultsBuild';
import Survey2ResultsBuild from './Survey2ResultsBuild';
import Survey3ResultsBuild from './Survey3ResultsBuild';

class AllSurveyResults extends React.Component {
constructor(){
    super()
    this.state = {
        surv1Vis: 'visible',
        surv2Vis: 'hidden',
        surv3Vis: 'hidden',

    }
}
handleSur1 = () => {
    this.setState({
        surv1Vis: 'visible',
        surv2Vis: 'hidden',
        surv3Vis: 'hidden'
    })
}
handleSur2 = () => {
    this.setState({
        surv1Vis: 'hidden',
        surv2Vis: 'visible',
        surv3Vis: 'hidden'
    })
}
handleSur3 = () => {
    this.setState({
        surv1Vis: 'hidden',
        surv2Vis: 'hidden',
        surv3Vis: 'visible'
    })
}
    componentDidMount(){
        axios.get('/api/surveyresults/allresults/ultrajoined').then( results =>{
            this.props.getSurveyResultsUltraJoinedTable(results.data)
        }).catch( err => console.log( err ))
    }
    render(){
        //  console.log(this.props.surveyResultsUltraJoinedTable)

        let currentSurveyViewed = () => {
            if(this.state.surv1Vis === 'visible'){
            return(< Survey1ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />)     
            }
            else if(this.state.surv2Vis === 'visible'){
            return(< Survey2ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />)     
            }
            else if(this.state.surv3Vis === 'visible'){
            return(< Survey3ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />)     
            }
        }
     return(<div className={css(st.mainResultsDiv, st.pageStart)}>
            <h1>All Survey Results</h1><br/>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=> this.handleSur1()}>Survey 1</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=> this.handleSur2()} >Survey 2</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=> this.handleSur3()} >Survey 3</button>
    {currentSurveyViewed()}
        </div>)
    }
}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const st = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainResultsDiv: {
        textAlign: 'center',
    },
    surveyButtons: {
        width: '90px',
        height: '40px',
        background: 'rgba(0, 204, 255, 0.6)',
        // border: 'none',
        // borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        border: '1px solid rgba(255,99,132,1)',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    buttonsHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
            transition: '1s all ease',
        },
    },  
})
let mapStateToProps = (state) => {
    return {
        user: state.user,
        surveyResultsUltraJoinedTable: state.surveyResultsUltraJoinedTable,
        megaSurveyTable: state.megaSurveyTable,
    }
}
export default connect(mapStateToProps, { getSurveyResultsUltraJoinedTable } )(AllSurveyResults);