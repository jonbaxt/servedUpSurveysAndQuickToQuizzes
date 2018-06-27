import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { setCurrentQuizAnswersInfo } from '../../../../ducks/reducer';

class AnswerEditor extends Component {
    constructor() {
        super()
        this.state = {
            answerView: false,
            answerTextView: false,
            answerTextChangeInp: '',
            answerImgView: false,
            answerImgInput: '',
            isCorrectToggle: false,

        }
    }
    toggleAnswerView = () => { this.setState({ answerView: !this.state.answerView }) }

    toggleAnswerTextView = () => { this.setState({ answerTextView: !this.state.answerTextView }) }
    handleAnswerTextInput = (e) => { this.setState({ answerTextChangeInp: e }) }
    resetAnswerTextInput = () => { this.setState({ answerTextChangeInp: '' }) }
    changeAnswerText = () => {
        const data = ['ans_text', this.state.answerTextChangeInp]
        axios.put(`/api/quizedit/from/quizanswerstable/where/${Number(this.props.element.quiz_id)}/${Number(this.props.element.ans_id)}`, data).then(res => this.props.setCurrentQuizAnswersInfo(res.data)).catch(err => console.log(err))
        this.toggleAnswerTextView();
        this.resetAnswerTextInput();
    }

    toggleAnswerImg = () => { this.setState({ answerImgView: !this.state.answerImgInput }) }
    handleAnswerImgInput = (e) => { this.setState({ answerImgInput: e }) }
    resetAnswerImgInput = () => { this.setState({ answerImgInput: '' }) }
    changeAnswerImage = () => {
        const data = ['ans_img', this.state.answerImgInput]
        axios.put(`/api/quizedit/from/quizanswerstable/where/${Number(this.props.element.quiz_id)}/${Number(this.props.element.ans_id)}`, data).then(res => this.props.setCurrentQuizAnswersInfo(res.data)).catch(err => console.log(err))
        this.toggleAnswerImg();
        this.resetAnswerImgInput();
    }
    // toggleIsCorrect = () => { this.setState({ isCorrectToggle: !this.state.isCorrectToggle }) }
    // handleIsCorrectChanger = () => { this.setState({ isCorrect: !this.props.element.is_correct }) }
    render() {
        console.log(this.props.element)
        return (
            <div className={css(st.quizBM)}>
            
                <br />
                <div className={css(st.quizBM, st.butterWut, st.stickOut)} onClick={() => this.toggleAnswerView()} ><h3>Answer#{this.props.index + 1}</h3></div>
                <br />
                <div className={this.state.answerView ? css(st.droppy) : css(st.droppy, st.hide)} >

                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Answers's Text</h3>
                        <div className={this.state.answerTextView ? css(st.dropper) : css(st.dropper, st.hide)}>
                            <input type='text' placeholder={this.props.element.ans_text} value={this.state.answerTextChangeInp} onChange={(e) => this.handleAnswerTextInput(e.target.value)} className={this.state.answerTextView ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                            <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeAnswerText()} >
                                Change</button><button className={css(st.butty)} onClick={() => {
                                    this.toggleAnswerTextView()
                                    this.resetAnswerTextInput()
                                }} >Cancel</button></div>
                        </div>
                        <p>{this.props.element.ans_text}</p>
                        <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleAnswerTextView()} >Answer Text Edit</h3>
                    </div>
                    <br />

                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Answers's Image</h3>
                        {this.props.element.ans_img !== null ? <img src={this.props.element.ans_img} alt='' style={{ width: '100%' }} /> : 'No Image for answer'}
                        <div className={this.state.answerImgView ? css(st.dropper) : css(st.dropper, st.hide)}>
                            <input type='text' placeholder={this.props.element.ans_img} value={this.state.answerImgInput} onChange={(e) => this.handleAnswerImgInput(e.target.value)} className={this.state.answerImgView ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                            <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeAnswerImage()} >
                                Change</button><button className={css(st.butty)} onClick={() => {
                                    this.toggleAnswerImg()
                                    this.resetAnswerImgInput()
                                }} >Cancel</button></div>
                        </div>
                        <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleAnswerImg()} >Answer Image Edit</h3>
                    </div>
                    <br />

                </div>
            </div>
        )
    }
}

const st = StyleSheet.create({
    quizBM: { display: 'flex', flexDirection: 'column', margin: '0 auto', },
    editorBox: { width: '310px', background: '#3300CC', boxShadow: '5px 10px 8px #330099', },
    boxW: { background: '#3300CC', transition: '1s all ease', },
    buildBord: { border: '1px solid black', },
    shad: { textShadow: '1px 1px 2px #3300CC', },

    butty: { color: '#00ccff', border: 'none', background: 'white', },
    butDiv: { display: 'flex', justifyContent: 'space-around' },
    butterWut: {
        width: '310px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '5px',
        background: '#3300CC',
        // color: 'white', 
        fontWeight: 'bolder',
    },
    stickOut: { ':hover': { background: 'rgba(173, 216, 230, 0.6)', opacity: 1, transition: '1s all ease', } },
    hider: { opacity: 0, },
    appear: { ':hover': { background: 'rgba(173, 216, 230, 0.8)', opacity: 1, transition: '1s all ease', } },
    droppy: { height: '700px', overflow: 'auto', transition: '1s all ease', opacity: 1, },
    // droppy: { height: '700px', overflow: 'hidden', transition: '1s all ease', opacity: 1, },
    dropper: { height: '70px', width: '310px', overflow: 'hidden', background: '#3300CC', boxShadow: '5px 10px 8px #330099', transition: '1s all ease', opacity: 1, },
    dropInput: { height: '30px', background: '#00ccff', border: 'none', width: '80%', textAlign: 'center', color: 'white', transition: '1s all ease', opacity: 1, },
    textAreaH: { height: '80px' },
    textAreaDrop: { height: '120px', },
    hide: { height: '0px', opacity: 0, },
})
function mapStateToProps(state) {
    return {
        currentQuizInfo: state.currentQuizInfo,
        currentQuizQuestionsInfo: state.currentQuizQuestionsInfo,
        currentQuizAnswersInfo: state.currentQuizAnswersInfo
    }
}
export default connect(mapStateToProps, { setCurrentQuizAnswersInfo })(AnswerEditor);