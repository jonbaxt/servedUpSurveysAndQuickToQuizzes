import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import NavMenu from '../NavMenu/NavMenu';
import './SurveyWizardStart.css'
import { setCurrentSurveyInfo, getMegaSurveyTable } from '../../ducks/reducer';

class SurveyWizardStart extends Component {
    componentDidMount() {
        //FIXME: Need to add user verification later.
        // if(this.props.user.id !== this.props.match.params.currentUserId){
        //     console.log('does not match in redux')
        // }
        axios.get(`/api/surveytaker/getSurveyInfo/${this.props.match.params.surveyId}`).then((surveyInfo) => {
            this.props.setCurrentSurveyInfo(surveyInfo.data[0])
            if(this.props.megaSurveyTable.length === 0){
                axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
                    this.props.getMegaSurveyTable(theMassiveTable.data)
                }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
            }
        })
    }
    render() {
        let anonymous = 'not anonymous';
        this.props.currentSurveyInfo.anonymous ? anonymous = 'anonymous' : anonymous = 'not anonymous'
        return (
            <div className={`surveyWizStartMain ${css(Styles.pageStart)}`}>
                {/* <NavMenu /> */}
                <div className='surveyStartBody'>
                    <h2>Served Up Surveys</h2>
                    <br />
                    <h3>{this.props.currentSurveyInfo.title}</h3>
                    <br />
                    <img src={this.props.currentSurveyInfo.start_img} alt='' />
                    <br />
                    <p>Survey Description: <br />
                    <br />
                    {this.props.currentSurveyInfo.description} 
                    <br />
                    <br /> This survey is {anonymous}</p>
                    <br />
                    <div className='surveyButtonArea'>
                        <Link className='surveyPrettyButton green' to={`/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}/1`} >Start Survey</Link>
                        <Link className='surveyPrettyButton cancelRed' to='/Dashboard' >Cancel</Link>
                    </div>
                    <br />
                    <h4>Survey Created By: {this.props.currentSurveyInfo.survey_creator}</h4>
                </div>
            </div>
        )
    }
}
const initialOpacityKeyframes = {
    'from': { opacity: 0 },
    'to': { opacity: 1 }
}
const Styles = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
});
let mapStateToProps = (state) => {
    return {
        currentSurveyInfo: state.currentSurveyInfo,
        user: state.user,
        megaSurveyTable: state.megaSurveyTable
    }
}
const mapDispatchToProps = {
    setCurrentSurveyInfo, 
    getMegaSurveyTable
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyWizardStart);