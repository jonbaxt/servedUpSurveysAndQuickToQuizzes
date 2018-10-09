import React from 'react';
import axios from 'axios';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages } from '@fortawesome/free-solid-svg-icons';
// import faToggleOff from '@fortawesome/fontawesome-free-solid/faToggleOff'
// import faToggleOn from '@fortawesome/fontawesome-free-solid/faToggleOn'

import { st } from './QuizCreateStartStyles';
import { getNewQuizJustCreated, setSelectedQuiz } from '../../../ducks/reducer';


class QuizCreateStart extends React.Component {
    constructor() {
        super()
        this.state = {
            newTitle: '',
            newDescription: '',
            newStartImg: '',
            newTimed: false,
            toggler: false
        }
        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNewDescription = this.handleNewDescription.bind(this);
        this.handleNewStartImg = this.handleNewStartImg.bind(this);
        this.handleNewTimedChange = this.handleNewTimedChange.bind(this);
    }
    handleNewTitle(newTit) {
        // console.log(newTit)
        this.setState({ newTitle: newTit })
    }
    handleNewDescription(newDes) {
        // console.log(newDes)
        this.setState({ newDescription: newDes })
    }
    handleNewStartImg(newImg) {
        // console.log(newImg)
        this.setState({ newStartImg: newImg })
    }
    handleNewTimedChange(trueOrFalse) {
        this.setState({ newTimed: trueOrFalse })
    }
    handleToggler = () => {
        this.setState({ toggler: !this.state.toggler })
    }
    handleSubmitQuizCreate = () => {
        const compiledAnswer = {
            Title: this.state.newTitle,
            Description: this.state.newDescription,
            Start_Img: this.state.newStartImg,
            Timed: this.state.newTimed,
            Quiz_Owner: this.props.user.id
        }
        axios.post('/api/quizCreation/newQuiz', compiledAnswer).then((response) => {
            this.props.getNewQuizJustCreated(response.data)
            this.props.setSelectedQuiz(Number(response.data[0].quiz_id))   
            // console.log(response)
        }).catch((err) => console.log(err))
    }
    render() {
        let previewImage = () => { return (this.state.newStartImg !== '' ? <img src={this.state.newStartImg} alt='' className={css(st.picResize)} /> : <div className={css(st.fontResizePicArea)}><FontAwesomeIcon className={css(st.fontResize, st.fontResizeTablet, st.fontResizeLaptop, st.fontResizeBiggest)} icon={faImages} /></div>) }
        let timedDecision = () => { return (this.state.newTimed ? <p className={css(st.texCen, st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)} >Quiz will be timed</p> : <p className={css(st.texCen, st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)} >Quiz will not be timed</p>) }
        // let toggleOnOff = () => { return (this.state.toggler ? <FontAwesomeIcon icon={faToggleOn} className={css(st.trans, st.transAnimation)} onClick={() => this.handleToggler()}/>: <FontAwesomeIcon icon={faToggleOff} className={css(st.trans, st.transAnimation)} onClick={() => this.handleToggler()}/>  )}
        return (
            <div className={css(st.fl, st.jConCen, st.marTop, st.pageStart)}>
                <div className={css(st.boxW, st.boxWTablet, st.boxWLaptop, st.boxWBiggest, st.borderShadow)} >
                    <h1 className={css(st.texCen, st.h1Normal, st.h1Tablet, st.h1Laptop, st.h1Biggest)} >Quiz Creator</h1><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >New Quiz Name</h3><br />
                    <input type='text' placeholder='Enter Quiz Name Here' className={css(st.inputBoxStyled, st.inputBoxStyledTablet, st.inputBoxStyledLaptop, st.inputBoxStyledBiggest)} value={this.state.newTitle} onChange={(el) => this.handleNewTitle(el.target.value)} /><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Description</h3>
                    <p className={css(st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)}>This will be used to show the a brief description of what the survey is about on the quiz selection page.</p><br />

                    <textarea className={css(st.textAreaBoxStyled, st.textAreaBoxStyledTablet, st.textAreaBoxStyledLaptop, st.textAreaBoxStyledBiggest)} value={this.state.newDescription} onChange={(el) => this.handleNewDescription(el.target.value)} placeholder='Your Description' rows='5' /><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Pick a Start Image</h3>
                    <p className={css(st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)}>Make a start image! Copy a URL and paste into the textbox and see your image here!</p><br />
                    <input className={css(st.inputBoxStyled, st.inputBoxStyledTablet, st.inputBoxStyledLaptop, st.inputBoxStyledBiggest)} placeholder='URL Link' type='url' onChange={(el) => this.handleNewStartImg(el.target.value)} value={this.state.newStartImg} /><br /><br />

                    {previewImage()}<br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Timing</h3>
                    <p className={css(st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)}>Would you like these quiz questions to be timed?</p><br />

                    <div className={css(st.fl, st.spA)} >
                        <button className={css(st.yesNoButtons, st.yesNoHover)} onClick={() => this.handleNewTimedChange(true)} >YES</button> <button className={css(st.yesNoButtons, st.yesNoHover)} onClick={() => this.handleNewTimedChange(false)}>NO</button>
                    </div><br />
                    {timedDecision()}
                    <br />
                    
                    {/* /createnew/${this.props.match.params.currentUserId}/quiz/${String(this.props.currentQuizId)}/quizquestionssetup */}
                    
                    <div className={css(st.fl, st.jConCen)} >
                    <Link style={{textDecorationLine: 'none', color: 'white'}} to={`/createnew/${this.props.match.params.currentUserId}/quiz/quizquestionssetup`} >
                    <button className={css(st.createButton, st.yesNoHover)} onClick={() => this.handleSubmitQuizCreate()}>
                    Create New Quiz
                    </button>
                    </Link>
                    </div><br />
                </div>
                <br /><br /><br /><br />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.user,
        currentQuizId: state.currentQuizId,
        quizNewCreatedTable: state.quizNewCreatedTable
    }
}

export default connect(mapStateToProps, { getNewQuizJustCreated, setSelectedQuiz })(QuizCreateStart);