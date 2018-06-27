import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import axios from 'axios';
import { setCurrentQuizQuestionsInfo } from '../../../../ducks/reducer';
import AnswerList from '../AnswerEditor/AnswerList';

class QuesEditor extends React.Component {
    constructor() {
        super()
        this.state = {
            questionStuffViewed: false,
            quesTextEditView: false,
            quesTextEdInput: '',
            quesImgEditView: false,
            quesImgEditInput: '',
        }
    }
    toggleQuestion = () => { this.setState({ questionStuffViewed: !this.state.questionStuffViewed }) }
    
    toggleQuesEdit = () => { this.setState({ quesTextEditView: !this.state.quesTextEditView }) }
    handleQuesTexEdInput = (e) => { this.setState({ quesTextEdInput: e }) }
    resetQuesTextEdInp = () => { this.setState({ quesTextEdInput: '' })}
    changeQuesText = () => {
        const bodyInfo = ['ques_text', this.state.quesTextEdInput]
        axios.put(`/api/quizedit/from/quizquestionstable/where/${this.props.currentQuizInfo.quiz_id}/${this.props.ques_id}`, bodyInfo).then( res => this.props.setCurrentQuizQuestionsInfo(res.data)).catch( err => console.log( err ))
        this.toggleQuesEdit();
        this.resetQuesTextEdInp();
    }
    
    toggleQuesImgEdit = () => { this.setState({ quesImgEditView: !this.state.quesImgEditView })}
    handleQuesImgEdInput = (e) => { this.setState({ quesImgEditInput: e })}
    resetQuesImgEditInput = () => { this.setState({ quesImgEditInput: '' })}
    changeQuesImg = () => {
        const bodyInfo = ['ques_img', this.state.quesTextEdInput]
        axios.put(`/api/quizedit/from/quizquestionstable/where/${this.props.currentQuizInfo.quiz_id}/${this.props.ques_id}`, bodyInfo).then( res => this.props.setCurrentQuizQuestionsInfo(res.data)).catch( err => console.log( err ))
        this.toggleQuesImgEdit();
        this.resetQuesImgEditInput();
    }

    render() {
        let quesListed = this.props.currentQuizQuestionsInfo.filter(el => el.ques_num === this.props.ques_num).reduce(e => e)
        let combineAnswers = this.props.currentQuizAnswersInfo.filter((elInner) => elInner.quiz_ques_id === this.props.ques_id)

        let doImage = quesListed.ques_img !== null ? <img src={quesListed.ques_img} alt='' style={{ width: '100%' }} /> : 'No Image Set Currently';
        // console.log(quesListed)
        // console.log(combineAnswers)
        return (
            <div className={css(st.quizBM)}>
                <br />

                <div className={css(st.quizBM, st.butterWut, st.stickOut)} onClick={() => this.toggleQuestion()} ><h3>Question#{this.props.ques_num}</h3></div>
                <br />
                <div className={this.state.questionStuffViewed ? css(st.droppy) : css(st.droppy, st.hide)} >
                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Question {this.props.ques_num}'s Text</h3>
                        <div className={this.state.quesTextEditView ? css(st.dropper) : css(st.dropper, st.hide)}>
                            <input type='text' placeholder={quesListed.ques_text} value={this.state.quesTextEdInput} onChange={(e) => this.handleQuesTexEdInput(e.target.value)} className={this.state.quesTextEditView ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                            <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeQuesText()} >
                                Change</button><button className={css(st.butty)} onClick={() => { this.toggleQuesEdit()
                                this.resetQuesTextEdInp() }} >Cancel</button></div>
                        </div>
                        <p>{quesListed.ques_text}</p>
                        <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleQuesEdit()} >Question Text Edit</h3>
                    </div>
                    <br />
                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Question {this.props.ques_num}'s Image</h3>
                        <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleQuesImgEdit()} >Question Image Edit</h3>
                        {doImage}
                        <div className={this.state.quesTextEditView ? css(st.dropper) : css(st.dropper, st.hide)}>
                            <input type='text' placeholder={quesListed.ques_img} value={this.state.quesImgEditInput} onChange={(e) => this.handleQuesImgEdInput(e.target.value)} className={this.state.quesTextEditView ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                            <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeQuesImg()} >
                                Change</button><button className={css(st.butty)} onClick={() => { this.toggleQuesImgEdit()
                                this.resetQuesImgEditInput() }} >Cancel</button></div>
                        </div>
                    </div>
                    <br />
                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Question {this.props.ques_num}'s Type of Question</h3>
                        <h3>Currently {quesListed.ques_type}</h3>
                    </div>
                    <br />
                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Question {this.props.ques_num}'s Features</h3>
                        <h3>Coming Soon!</h3>
                    </div>
                    <br />
                    <div className={css(st.editorBox, st.quizBM)} >
                        <h3>Question {this.props.ques_num}'s Time to Take</h3>
                        <h3>{this.props.currentQuizInfo.timed ? quesListed.time_limit : 'not timed'}</h3>
                    </div>
                    <br />
                    <AnswerList combineAnswers={combineAnswers} />
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
export default connect(mapStateToProps, { setCurrentQuizQuestionsInfo })(QuesEditor);