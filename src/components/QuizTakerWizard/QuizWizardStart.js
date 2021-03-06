import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
// import NavMenu from '../NavMenu/NavMenu';
import './QuizWizardStart.css'
import { setCurrentQuizInfo, getMegaQuizTable, getQuizTable, setCurrentPathname } from '../../ducks/reducer';

class QuizWizardStart extends Component {
    componentDidMount() {
        if(this.props.pathnameCurrent.length !== 0){
            this.props.setCurrentPathname(this.props.location.pathname)
        }
        //FIXME: Need to work on this later.
        // if(this.props.user.id !== this.props.match.params.currentUserId){
        //     console.log('does not match in redux')
        // }
        if(this.props.currentQuizInfo.length === 0){ this.props.getQuizTable(); }
        if(this.props.megaQuizTable.length === 0){ this.props.getMegaQuizTable() }
        axios.get(`/api/quiztaker/getQuizInfo/${this.props.match.params.quizId}`).then((quizInfo) => {
             this.props.setCurrentQuizInfo(quizInfo.data[0])
        })
    }
    render() {
        let timedString = 'not timed'
        if (this.props.currentQuizInfo.timed) {
            timedString = 'timed'
        } else {
            timedString = 'not timed'
        }
        return (
            <div className={`quizWizStartMain ${css(Styles.pageStart)}`}>
                {/* <NavMenu /> */}
                <div className='quizStartBody'>
                    <h2><FontAwesomeIcon icon={faRoad}/> Quick To Quizzes</h2>
                    <br />
                    <img src={this.props.currentQuizInfo.start_img} alt='' />
                    <br />
                    <h3>{this.props.currentQuizInfo.title}</h3>
                    <br />
                    <p>Quiz Description:<br /> 
                    {this.props.currentQuizInfo.description} 
                    <br />
                    <br /> This quiz is {timedString}</p>
                    <br />
                    <div className='buttonArea'>
                        <Link className='prettyButton green' to={`/${this.props.match.params.currentUserId}/quiz/${this.props.match.params.quizId}/1`} >Start Quiz</Link>
                        <Link className='prettyButton cancelRed' to='/Dashboard' >Cancel</Link>
                    </div>
                    <br />
                    <h4>Quiz Created By: {this.props.currentQuizInfo.survey_creator}</h4>
                </div>
            </div>
        )
    }
}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
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
        currentQuizInfo: state.currentQuizInfo,
        user: state.user,
        megaQuizTable: state.megaQuizTable,
        pathnameCurrent: state.pathnameCurrent,
    }
}
const mapDispatchToProps = {
    setCurrentQuizInfo, 
    getMegaQuizTable,
    getQuizTable,
    setCurrentPathname
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizWizardStart);