import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {
//     Pie,
//     // Doughnut, 
//     // Line, 
//     // Radar, 
//     Bar
// } from 'react-chartjs-2';

import { getSurveyResultsUltraJoinedTable } from '../../../../ducks/reducer';
import Survey1ResultsBuild from '../AllSurveyResults/Survey1ResultsBuild';
import Survey2ResultsBuild from '../AllSurveyResults/Survey2ResultsBuild';
import Survey3ResultsBuild from '../AllSurveyResults/Survey3ResultsBuild';

class SurveyDoneResults extends Component {
    componentDidMount() {
        axios.get('/api/surveyresults/allresults/ultrajoined').then(results => {
            this.props.getSurveyResultsUltraJoinedTable(results.data)
        }).catch(err => console.log(err))
    }
    render() {
        let getTheResults = () => {
            if( this.props.surveyResultsUltraJoinedTable.length !== 0){
                if(Number(this.props.match.params.surveyId) === 1){
                    return <Survey1ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />
                }
                else if(Number(this.props.match.params.surveyId) === 2){
                    return <Survey2ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />
                }
                else if(Number(this.props.match.params.surveyId) === 3){
                    return <Survey3ResultsBuild giveUltraTable={this.props.surveyResultsUltraJoinedTable} />
                }
            }
        }
        return (<div>
            <h1>Survey Done Results</h1>
            {getTheResults()}
            <Link to='/Dashboard' className={css(st.buttonClickArea)} >Finished</Link>

        </div>)
    }
}
const st = StyleSheet.create({
    buttonClickArea: {
        margin: '2px',
        width: '60px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white',
        textDecoration: 'none'
        // margin: '0 auto'
    },

})
function mapStateToProps(state) {
    return {
        surveyResultsUltraJoinedTable: state.surveyResultsUltraJoinedTable
    }
}
export default connect(mapStateToProps, { getSurveyResultsUltraJoinedTable })(SurveyDoneResults);