import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentQuizInfo, setCurrentQuizQuestionsInfo, setCurrentQuizAnswersInfo, getQuizTable } from '../../../ducks/reducer';

class QuizEditor extends Component {
    constructor() {
        super()
        this.state = {
            temporaryQuesIdSelected: -1,
            temporaryAnsIdSelected: -1,
            temporaryStringAccess: '',
            selectedChange: '',
            tempTexBoxSave: '',
            editBoxVisible: false,
            questionBoxVisible: false,
            answerBoxVisible: false,
            confirmDeleteBoxVisible: false
        }
    }
    editBoxChange = () => {
        this.setState({
            editBoxVisible: !this.state.editBoxVisible,
            tempTexBoxSave: ''
        })
    }
    editQuestionBoxChange = () => {
        this.setState({
            questionBoxVisible: !this.state.questionBoxVisible
        })
    }
    answerBoxChange = () => {
        this.setState({
            answerBoxVisible: !this.state.answerBoxVisible
        })
    }
    confirmDeleteBoxChange = () => {
        this.setState({ confirmDeleteBoxVisible: !this.state.confirmDeleteBoxVisible })
    }
    handleSelectedChange = (e) => {
        this.setState({ selectedChange: e })
    }
    handleTempTextBoxChange = (e) => {
        this.setState({ tempTexBoxSave: e })
    }
    handleTemporaryStringAccess = (e) => {
        this.setState({ temporaryStringAccess: e })
    }
    handleTemporaryQuesIdSelected = (e) => {
        this.setState({ temporaryQuesIdSelected: e })
    }
    handleTemporaryAnsIdSelected = (e) => {
        this.setState({ temporaryAnsIdSelected: e })
    }
    componentDidMount() {
        axios.get(`/api/quiztaker/getQuizInfo/${this.props.match.params.quizId}`).then((quizInfo) => {
            this.props.setCurrentQuizInfo(quizInfo.data[0])
        }).catch(err => console.log(err))
        axios.get(`/api/quiztaker/getQuizQuestionsInfo/${this.props.match.params.quizId}`).then((quizQuestions) => {
            this.props.setCurrentQuizQuestionsInfo(quizQuestions.data)
        })
        axios.get(`/api/quiztaker/getQuizAnswersInfo/${this.props.match.params.quizId}`).then((quizAnswers) => {
            this.props.setCurrentQuizAnswersInfo(quizAnswers.data)
        })
    }
    handleEditButttons = (userEdit) => {
        const bodyInfo = [this.state.selectedChange, userEdit]
        axios.put(`/api/quizedit/from/quiztable/where/id/${Number(this.props.match.params.quizId)}`, bodyInfo).then(res => {
            // console.log(res.data)
            this.props.setCurrentQuizInfo(res.data[0])
            this.editBoxChange();
        }).catch(err => console.log('Didn`t work'))
        this.setState({ tempTexBoxSave: '' })
    }
    handleQuestionButtons = (userEdit) => {
        const bodyInfo = [this.state.selectedChange, userEdit]

        // console.log(bodyInfo)
        // console.log(this.state.temporaryQuesIdSelected)
        // console.log(this.props.match.params.quizId)
        // axios.put(`/api/quizedit/from/quizquestionstable/where/${Number(this.props.match.params.quizId)}/${Number(this.state.temporaryQuesIdSelected)}`, bodyInfo).then(res => {
        axios.put(`/api/quizedit/from/quizquestionstable/where/${this.props.match.params.quizId}/${this.state.temporaryQuesIdSelected}`, bodyInfo).then(res => {
            // console.log(res.data)
            this.props.setCurrentQuizQuestionsInfo(res.data)
            this.editQuestionBoxChange();
        }).catch(err => console.log('Didn`t work', err))
        // this.setState({ tempTexBoxSave: '' })
    }
    //TODO: Need to create a handler for dealing with different answer edits
    handleAnswerButtons = () => {

    }
    handleDeleteQuizButton = () => {
        axios.delete(`/api/quizdelete/wholequiz/byid/${this.props.match.params.quizId}`).then(answerBack => {
            this.props.getQuizTable(answerBack.data)
            console.log('success delete', answerBack)
        }).catch(err => console.log('failure', err))
    }







    render() {
        // console.log(this.state.editButtonDisabled)
        // console.log(this.props.currentQuizInfo)
        let approval = '';
        if (this.props.currentQuizInfo !== 0) {
            if (this.props.currentQuizInfo.site_approval) {
                approval = 'approved'
            } else {
                approval = 'not approved'
            }
        }
        let timing = ''
        if (this.props.currentQuizInfo !== 0) {
            if (this.props.currentQuizInfo.timed) {
                timing = 'timed'
            } else {
                timing = 'not timed'
            }
        }
        let editDelete = () => {
            if (this.props.currentQuizInfo !== 0) {
                return (
                    <div className={css(Styles.editorMainBox)}>
                        <div className={css(Styles.texLeft)}>
                            <p>Date Created: {this.props.currentQuizInfo.created_on}</p>
                            <p>Date Last Updated: {this.props.currentQuizInfo.updated_on}   </p>
                            <p>Current Quiz Version is {approval} to post.</p>
                        </div>
                        <br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Quiz Title</p>
                                <br />
                                <p>{this.props.currentQuizInfo.title}</p>
                            </div>
                            <button className={css(conditionalDisplayStyles.editStyleHide, conditionalDisplayStyles.editStyleShowOnHover)}
                                // disabled='false'
                                // disabled={this.state.editButtonDisabled}
                                onClick={() => {

                                    // console.log('You clicked the edit')
                                    // this.handleEditButttons()
                                    this.handleSelectedChange('title')
                                    this.editBoxChange()

                                }} >Edit</button>
                        </div>
                        <br />
                        <br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.flBox, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest,  Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Quiz Description</p>
                                <br />
                                <p>{this.props.currentQuizInfo.description}</p>
                                <br />
                            </div>
                            <button className={css(conditionalDisplayStyles.editStyleHide, conditionalDisplayStyles.editStyleShowOnHover)}
                                onClick={() => {
                                    this.handleSelectedChange('description')
                                    this.editBoxChange()
                                }} >Edit</button>
                        </div>
                        <br /><br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Current Starting Image</p>
                                <br />
                                <img src={this.props.currentQuizInfo.start_img} alt='' className={css(Styles.picSiz)} />
                                <br />
                            </div>
                            <button className={css(conditionalDisplayStyles.editStyleHide, conditionalDisplayStyles.editStyleShowOnHover)}
                                onClick={() => {
                                    this.handleSelectedChange('start_img')
                                    this.editBoxChange()
                                }} >Edit</button>
                        </div>
                        <br /><br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Timed:</p>
                                <p>This quiz is {timing}</p>
                                <br />
                            </div>
                            <button className={css(conditionalDisplayStyles.editStyleHide, conditionalDisplayStyles.editStyleShowOnHover)}
                                onClick={() => {
                                    this.handleSelectedChange('timed')
                                    this.editBoxChange()
                                }} >Edit</button>
                        </div>
                        <br /><br />
                        <h1>Current Quiz Questions</h1>
                        <br /><br />
                        {quizQuestionsEditor()}


                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Add a new Question</p>
                                <br />
                            </div>
                            <button className={css(conditionalDisplayStyles.editStyleHide, conditionalDisplayStyles.editStyleShowOnHover)}
                                onClick={() => {
                                    this.handleSelectedChange('unknown')
                                    this.editBoxChange()
                                }} >Create Question</button>
                        </div>

                        <br /><br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.marTandB, Styles.flBox, Styles.flCol, Styles.hoverOnDiv)}>
                            <span
                                className={css(Styles.delButton)}
                                onClick={() => {
                                    this.confirmDeleteBoxChange()
                                    // this.handleDeleteQuizButton();
                                    // console.log('NO DON`T DELETE IT! CHERISH IT!')
                                }} >DELETE QUIZ</span>
                            <p>WARNING: CLICKING THIS WILL REMOVE QUIZ COMPLETELY</p>
                            <br />
                        </div><br /><br /><br /><br /><br />
                    </div>
                )
            }
        }

        let quizQuestionsEditor = () => {
            if (this.props.currentQuizInfo.length !== 0 && this.props.currentQuizQuestionsInfo.length !== 0 && this.props.currentQuizAnswersInfo.length !== 0) {

                let mapQuestions = this.props.currentQuizQuestionsInfo.map(el => {

                    let image = el.ques_img ? <img className={css(Styles.picSiz)} src={el.ques_img} alt='' /> : <p>No picture currently</p>

                    return (
                        <div key={el.ques_id} className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.marTandB, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.hoverOnSelection, Styles.flSpBt)}>
                                <p className={css(Styles.wWrap)} >Question # {el.ques_num}</p>
                                <button className={css(Styles.editStyle)} onClick={() => {
                                            console.log('Delete Question ', el.ques_id)
                                            // this.handleSelectedChange('ques_text')
                                            // this.handleTemporaryQuesIdSelected(el.ques_id)
                                            // this.handleTemporaryStringAccess(el.ques_text)
                                            // this.editQuestionBoxChange()
                                        }} >Delete Question</button>
                                </div>
                                <br /><br />
                                
                                <p>Question Text:</p>
                                <div className={css(Styles.flBox, Styles.boxW, Styles.hoverOnSelection, Styles.flSpBt)}>
                                    <p className={css(Styles.wWrap)} >{el.ques_text}</p>
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        <button className={css(Styles.editStyle)} onClick={() => {
                                            this.handleSelectedChange('ques_text')
                                            this.handleTemporaryQuesIdSelected(el.ques_id)
                                            this.handleTemporaryStringAccess(el.ques_text)
                                            this.editQuestionBoxChange()
                                        }} >Edit</button>
                                    </div>
                                </div>
                                <br /><br />
                                <p>Question Type Currently: </p>
                                <div className={css(Styles.flBox, Styles.boxW, Styles.hoverOnSelection, Styles.flSpBt)}>
                                    <p className={css(Styles.wWrap)} >{el.ques_type}</p>
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        <button className={css(Styles.editStyle)} onClick={() => {
                                            this.handleSelectedChange('ques_type')
                                            this.handleTemporaryQuesIdSelected(el.ques_id)
                                            this.handleTemporaryStringAccess(el.ques_type)
                                            this.editQuestionBoxChange()
                                        }} >Edit</button>
                                    </div>
                                </div>
                                <br /> <br />
                                <p>Question Image:</p>
                                <div className={css(Styles.flBox, Styles.hoverOnSelection, Styles.flSpBt)}>
                                    <br />
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        {image}
                                    </div>
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        <button className={css(Styles.editStyle)} onClick={() => {
                                            this.handleSelectedChange('ques_img')
                                            this.handleTemporaryQuesIdSelected(el.ques_id)
                                            this.handleTemporaryStringAccess(el.ques_img)
                                            this.editQuestionBoxChange()
                                        }} >Edit</button>
                                    </div>
                                </div>
                                <br /><br />
                                <p className={css(Styles.wWrap)} >Questions Features?:</p>
                                <div className={css(Styles.flBox, Styles.boxW, Styles.hoverOnSelection, Styles.flSpBt)}>
                                    <p>Features Will Go Here</p>
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        <button className={css(Styles.editStyle)} onClick={() => {
                                            this.handleSelectedChange('question_features')
                                            this.handleTemporaryQuesIdSelected(el.ques_id)
                                            this.handleTemporaryStringAccess(el.question_features)
                                            this.editQuestionBoxChange()
                                        }} >Edit</button>
                                    </div>
                                </div>
                                <br /><br />
                                <p className={css(Styles.wWrap)} >Time Limit Specification:</p>
                                <div className={css(Styles.flBox, Styles.boxW, Styles.hoverOnSelection, Styles.flSpBt)}>
                                    <p>Currently: {el.time_limit} milliseconds </p>
                                    <div className={css(Styles.flBox, Styles.flCol)}>
                                        <button className={css(Styles.editStyle)} onClick={() => {
                                            this.handleSelectedChange('time_limit')
                                            this.handleTemporaryQuesIdSelected(el.ques_id)
                                            this.editQuestionBoxChange()
                                        }} >Edit</button>
                                    </div>
                                </div>
                                <br /><br />
                                <p>Answers</p>
                                <button className={css(Styles.editStyle)} onClick={() => {
                                    this.handleSelectedChange('ques_answers')
                                    this.handleTemporaryQuesIdSelected(el.ques_id)
                                    //TODO: Need to be able to access the answers to this question
                                    // this.editQuestionBoxChange()
                                    this.answerBoxChange()
                                }} >Edit Question Answers</button>
                                <br /><br />
                            </div>
                        </div>
                    )
                })
                return (<div > {mapQuestions} </div>)
            }
            return (<div></div>)
        }
        let makeAnswers = () => {
            let questionNumber = -1;
            let questionText;
            let mapAnswersToScreen;
            if (this.props.currentQuizQuestionsInfo.length !== 0) {
                let findQuesNum = this.props.currentQuizQuestionsInfo.filter(el => Number(el.ques_id) === Number(this.state.temporaryQuesIdSelected)).map(e => e.ques_num)
                // console.log(findQuesNum)
                questionNumber = findQuesNum[0]
                let findquesTex = this.props.currentQuizQuestionsInfo.filter(el => Number(el.ques_id) === Number(this.state.temporaryQuesIdSelected)).map(e => e.ques_text)
                questionText = findquesTex[0]
            }

            if (this.props.currentQuizInfo.length !== 0 && this.props.currentQuizQuestionsInfo.length !== 0 && this.props.currentQuizAnswersInfo.length !== 0) {

                mapAnswersToScreen = this.props.currentQuizAnswersInfo.filter(ansEl => Number(ansEl.quiz_ques_id) === Number(this.state.temporaryQuesIdSelected)).map((ansElem, ind) => {
                    let answersImage = ansElem.ans_img ? <img className={css(Styles.picSiz)} src={ansElem.ans_img} alt='' /> : <p>No answer picture</p>;
                    let theCorrectAnswer = ansElem.is_correct ? <p>Correct Answer</p> : <p>Not Correct Answer</p>;
                    return (
                        <div key={ansElem.ans_id} className={css(Styles.flBox, Styles.boxW, Styles.hoverOnSelection)}>
                            <div className={css(Styles.flBox, Styles.flCol, Styles.flCen, Styles.marZero)}>
                                <br />
                                <p className={css(Styles.wWrap)} >Answer #{ind + 1}</p>
                                <br />
                                <p>Answers Text</p>
                                <br />
                                <p>{ansElem.ans_text}</p>
                                <br />
                                <p>Answers_Image</p>
                                <br />
                                {answersImage}
                                <br />
                                <p>Correct Answer?</p>
                                <br />
                                {theCorrectAnswer}
                                <br />
                                <button className={css(Styles.editStyle)} onClick={() => {
                                    this.handleTemporaryAnsIdSelected(ansElem.ans_id)
                                    // console.log(this.state.temporaryAnsIdSelected)
                                    // this.editBoxChange()
                                }} >Edit Answer #{ind + 1}</button>
                                <br />
                            </div>
                        </div>
                    )
                })


            }
            return (<div className={
                this.state.answerBoxVisible ? css(conditionalDisplayStyles.displayAnswerEditor) : css(conditionalDisplayStyles.hideAnswerEditor)}>

                <div className={css(Styles.borderShadow, Styles.boxW, Styles.marTandB, Styles.flBox, Styles.flCol)}>
                    <p>Question #{questionNumber} Answers</p>
                    <p>{questionText}</p>
                    <button className={css(Styles.editStyle)} onClick={() => {
                        this.answerBoxChange()
                    }} >Cancel Answers Edit</button>
                    <br />
                    {mapAnswersToScreen}
                    <br />
                    <button className={css(Styles.editStyle)} onClick={() => {
                        this.answerBoxChange()
                    }} >Cancel Answers Edit</button>
                </div>
            </div>)
        }
        let confirmDeleteBox = () => {

            return (
                <div className={this.state.confirmDeleteBoxVisible ? css(conditionalDisplayStyles.displayDeleteBox) : css(conditionalDisplayStyles.hideDeleteBox)}>
                    <br /><br />
                    <p>Confirm Deletion</p><br /><p>Are you sure? Quiz will be completely deleted. You would need to create from the ground up if you want it back.</p><br />
                    <br /><br />
                    {/*Link Path:  /manage/userssurveys/1 */}
                    <Link className={css(Styles.noLine)} to={`/manage/userssurveys/${this.props.match.params.currentUserId}`} >
                        <span
                            className={css(Styles.delButton)}
                            onClick={() => {
                                // this.confirmDeleteBoxChange()
                                this.handleDeleteQuizButton();
                            }} >CONFIRM DELETE</span>
                    </Link>
                    <br /><br />
                    <span
                            className={css(Styles.delButtonCancel)}
                            onClick={() => {
                                this.confirmDeleteBoxChange()
                                // this.handleDeleteQuizButton();
                            }} >CANCEL</span>
                    <br /><br />
                </div>
            )
        }
        let changeInputs = () => {
            if (this.props.currentQuizInfo.length !== 0) {
                switch (this.state.selectedChange) {
                    case 'title':
                        return (<div className={this.state.editBoxVisible ? css(conditionalDisplayStyles.displayEditor) : css(conditionalDisplayStyles.hideEditor)} >
                            <p className={css(Styles.texSizBig)}>EDIT TITLE</p>
                            <div>
                                <p>Current Title</p>
                                <p>{this.props.currentQuizInfo.title}</p>
                            </div>
                            <div>
                                <p>New Title</p>
                                <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        // console.log(e.target.value)
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                            </div>
                            <div className={css(Styles.flBox, Styles.flSpBt)}>
                                <button
                                    className={css(Styles.editStyle)}
                                    onClick={() => {
                                        this.editBoxChange()
                                    }}
                                >Cancel</button>
                                <button
                                    className={css(Styles.editStyle)}
                                    onClick={() => {
                                        // console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(this.state.tempTexBoxSave)
                                    }} >Save</button>
                            </div>
                        </div>)
                    case 'description':
                        return (<div className={this.state.editBoxVisible ? css(conditionalDisplayStyles.displayEditor) : css(conditionalDisplayStyles.hideEditor)} >
                            <p className={css(Styles.texSizBig)}>EDIT DESCRIPTION</p>
                            <div>
                                <p>Current Description</p>
                                <p>{this.props.currentQuizInfo.description}</p>
                            </div>
                            <div>
                                <p>New Description</p>
                                <textarea type='text' rows='4' cols='30' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        // console.log(e.target.value)
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                            </div>
                            <div className={css(Styles.flBox, Styles.flSpBt)}>
                                <button className={css(Styles.editStyle)}
                                    onClick={this.editBoxChange}
                                >Cancel</button>
                                <button className={css(Styles.editStyle)}
                                    onClick={() => {
                                        // console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(this.state.tempTexBoxSave)
                                    }} >Save</button>
                            </div>
                        </div>)
                    case 'start_img':
                        return (<div className={this.state.editBoxVisible ? css(conditionalDisplayStyles.displayEditor) : css(conditionalDisplayStyles.hideEditor)} >
                            <p className={css(Styles.texSizBig)}>EDIT COVER IMAGE</p>
                            <div>
                                <p>Current URL Image</p>
                                <img src={this.props.currentQuizInfo.start_img} alt='' className={css(Styles.picSiz)} />
                            </div>
                            <div>
                                <p>New URL Image Enter</p>
                                <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        // console.log(e.target.value)
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                            </div>
                            <p>New Image Preview</p>
                            <img src={this.state.tempTexBoxSave} alt='' className={css(Styles.picSiz)} />
                            <div className={css(Styles.flBox, Styles.flSpBt)}>
                                <button className={css(Styles.editStyle)}
                                    onClick={this.editBoxChange}
                                >Cancel</button>
                                <button className={css(Styles.editStyle)}
                                    onClick={() => {
                                        // console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(this.state.tempTexBoxSave)
                                    }} >Save</button>
                            </div>
                        </div>)
                    case 'timed':
                        return (<div className={this.state.editBoxVisible ? css(conditionalDisplayStyles.displayEditor) : css(conditionalDisplayStyles.hideEditor)} >
                            <p className={css(Styles.texSizBig)}>EDIT IF QUIZ IS TIMED</p>

                            <div className={css(Styles.flBox, Styles.flSpAr)}>
                                <button className={css(Styles.editStyle)}
                                    onClick={() => {
                                        // console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(true)
                                    }} >Yes Timed</button>
                                <button className={css(Styles.editStyle)}
                                    onClick={() => {
                                        // console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(false)
                                    }} >No Timed</button>
                            </div>
                            <div className={css(Styles.flBox, Styles.flSpBt)}>
                                <button className={css(Styles.editStyle)}
                                    onClick={this.editBoxChange}
                                >Cancel</button>
                                {/* <button className={css(Styles.editStyle)}
                                    onClick={() => {
                                        console.log('Will Send to Axios From Here')
                                        this.handleEditButttons(this.state.tempTexBoxSave)
                                    }} >Save</button> */}
                            </div>
                        </div>)

                    default:
                        // return(<div></div>)
                        return (<div className={this.state.editBoxVisible ? css(conditionalDisplayStyles.displayEditor) : css(conditionalDisplayStyles.hideEditor)} >
                            <p>Nothing Selected</p>
                            <button className={css(Styles.editStyle)}
                                onClick={this.editBoxChange}
                            >Cancel</button>
                        </div>)
                }
            }
        }

        let changeQuestionInputs = () => {
            if (this.props.currentQuizInfo.length !== 0) {
                switch (this.state.selectedChange) {
                    case 'ques_text':
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)}>Question Text</p><br /><br />
                                <p>{this.state.temporaryStringAccess}</p><br /><br /><br />
                                <p>New Question</p><br /><br />
                                <textarea type='text' rows='4' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} /><br /><br /><br /><br />
                                <div className={css(Styles.flBox, Styles.flSpBt)}>
                                    <button className={css(Styles.editStyle)}
                                        onClick={this.editQuestionBoxChange}
                                    >Cancel</button>
                                    <button
                                        className={css(Styles.editStyle)}
                                        onClick={() => {
                                            this.handleQuestionButtons(this.state.tempTexBoxSave)
                                        }}
                                    >Save</button>
                                </div>
                            </div>
                        </div>)
                    case 'ques_type':
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)} >Question Type</p><br /><br /><br />
                                <p>Currently: {this.state.temporaryStringAccess}</p><br /><br /><br />
                                <p>New Question Types</p><br />
                                <button className={css(Styles.editStyle)}>Multiple Choice</button><br /><br />
                                <button className={css(Styles.editStyle)}>Text Area</button><br /><br />
                                <button className={css(Styles.editStyle)}></button>
                                <br /><br /><br />
                                <p>Please Note: </p>
                                {/* <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} /> */}
                                <div className={css(Styles.flBox, Styles.flSpBt)}>
                                    <button className={css(Styles.editStyle)}
                                        onClick={this.editQuestionBoxChange}
                                    >Cancel</button>
                                    <button
                                        className={css(Styles.editStyle)}
                                        onClick={() => {
                                            this.handleQuestionButtons(this.state.tempTexBoxSave)
                                        }} >Save</button>
                                </div>
                            </div>
                        </div>)
                    case 'ques_img':
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)} >Question Image</p>
                                <img src={this.state.temporaryStringAccess} alt='' className={css(Styles.picSiz)} />
                                <p>New URL Image Enter</p>
                                <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                                <p>New Image Preview</p>
                                <img src={this.state.tempTexBoxSave} alt='' className={css(Styles.picSiz)} />
                                <div className={css(Styles.flBox, Styles.flSpBt)}>
                                    <button className={css(Styles.editStyle)}
                                        onClick={this.editQuestionBoxChange}
                                    >Cancel</button>
                                    <button
                                        className={css(Styles.editStyle)}
                                        onClick={() => {
                                            this.handleQuestionButtons(this.state.tempTexBoxSave)
                                        }} >Save</button>
                                </div>
                            </div>
                        </div>)
                    case 'question_features':
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)} >Question Features</p>
                                <p>{this.state.temporaryStringAccess}</p>
                                <p>New Feature</p>
                                <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                                <div className={css(Styles.flBox, Styles.flSpBt)}>
                                    <button className={css(Styles.editStyle)}
                                        onClick={this.editQuestionBoxChange}
                                    >Cancel</button>
                                    <button
                                        className={css(Styles.editStyle)}
                                        onClick={() => {
                                            this.handleQuestionButtons(this.state.tempTexBoxSave)
                                        }} >Save</button>
                                </div>
                            </div>
                        </div>)
                    case 'time_limit':
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)} >Time Limit</p>
                                <p>{this.state.temporaryStringAccess}</p>
                                <p>New TimeLimit</p>
                                <input type='text' value={this.state.tempTexBoxSave}
                                    onChange={(e) => {
                                        this.handleTempTextBoxChange(e.target.value)
                                    }} />
                                <div className={css(Styles.flBox, Styles.flSpBt)}>
                                    <button className={css(Styles.editStyle)}
                                        onClick={this.editQuestionBoxChange}
                                    >Cancel</button>
                                    <button
                                        className={css(Styles.editStyle)}
                                        onClick={() => {
                                            this.handleQuestionButtons(this.state.tempTexBoxSave)
                                        }} >Save</button>
                                </div>
                            </div>
                        </div>)

                    default:
                        return (<div className={
                            this.state.questionBoxVisible ? css(conditionalDisplayStyles.displayQuestionEditor) : css(conditionalDisplayStyles.displayQuestionEditor,conditionalDisplayStyles.hideQuestionEditor)}>
                            <div className={css(Styles.flBox, Styles.flCol)} >
                                <p className={css(Styles.texSizBig)} >Nothing Selected</p>
                                <button className={css(Styles.editStyle)}
                                    onClick={this.editQuestionBoxChange}
                                >Cancel</button>
                            </div>
                        </div>)
                }
            }
        }

        // console.log(this.state.temporaryQuesIdSelected)
        // console.log(this.state.selectedChange)


        return (
            <div className={css(Styles.marCent, conditionalDisplayStyles.pageStart)} >
                <h1>Quiz Editor</h1>
                <br />
                {/* <div className={css(Styles.editorMainBox)}> */}
                {changeInputs()}
                {changeQuestionInputs()}
                {makeAnswers()}
                {confirmDeleteBox()}
                {editDelete()}
                {/* </div> */}
            </div>
        )
    }
}
// ===================ANIMATION VAIRABLE===============================================================================================
const initialOpacityKeyframes = {
    'from': { opacity: 0 },
    'to': { opacity: 1 }
}
const outOpacityKeyframes = {
    'from': { opacity: 1, },
    'to': { opacity: 0 }
}
const initialTranslateKeyframes = {
    '0%': { transform: 'translateX(-200px)' },
    '100%': { transform: 'translateX(0px)' }
}
const outTranslateKeyframes = {
    '0%': { transform: 'translateX(300px)' },
    '100%': { transform: 'translateX(0px)' }
}
// CONDITIONAL STYLES=================================================================================================================
const conditionalDisplayStyles = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    displayEditor: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        height: '500px',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    hideEditor: {
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        height: '500px',
        position: 'absolute',
        left: '-400px'
    },
    displayQuestionEditor: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        position: 'fixed'
    },
    hideQuestionEditor: {
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        position: 'absolute',
        left: '-400px'
    },
    displayAnswerEditor: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        overflow: 'auto',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        height: '600px',
        width: '310px',
        position: 'fixed'
    },
    hideAnswerEditor: {
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        position: 'absolute',
        left: '-400px'
    },
    displayDeleteBox: {
        animationName: initialOpacityKeyframes,
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        position: 'fixed',
        background: 'rgba(255, 26, 26, 0.8)',
        color: 'white',
        fontSize: '20px',
        width: '310px',
        margin: '0 auto',
        left: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    hideDeleteBox: {
        animationName: outOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        position: 'absolute',
        left: '-400px'
    },
    editStyleHide: {
        opacity: '0',
        transition: '1s all ease',
        border: 'none',
        color: 'white',
        background: 'rgba(173, 216, 230, 0.8)',
        height: '30px'
    },
    editStyleShowOnHover: {
        ':hover': {
            opacity: '1',
            transition: '1s all ease',
            color: 'white',
            background: 'rgba(173, 216, 230, 0.8)',
            height: '30px'
            // color: '#00ccff',
            // background: 'rgba(244, 205, 29, 0.6)',
            // transition: 'all 0.5s ease'
        }
    },
})
// REGULAR STYLES=================================================================================================================
const Styles = StyleSheet.create({
    editorMainBox: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        textAlign: 'left'
    },
    editSubWrap: {
        display: 'flex',
    },
    boxW: {
        width: '300px',
        background: '#3300CC',
        transition: '1s all ease',
    },
    boxTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            width: '470px',
        }
    },
    boxLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            width: '680px',
        }
    },
    boxBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
        }
    },
    flBox: {
        display: 'flex'
    },
    flCol: {
        flexDirection: 'column'
    },
    flRow: {
        flexDirection: 'row'
    },
    flSpBt: {
        justifyContent: 'space-between'
    },
    flSpAr: {
        justifyContent: 'space-around'
    },
    flCen: {
        justifyContent: 'center'
    },
    marZero: {
        margin: '0 auto'
    },
    texLeft: {
        textAlign: 'left'
    },
    texSizBig: {
        fontSize: '30px'
    },
    wWrap: {
        wordWrap: 'break-word'
    },
    borderShadow: {
        boxShadow: '5px 10px 8px #330099'
    },
    picSiz: {
        width: '100%'
    },
    marCent: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    marTandB: {
        marginTop: '10px',
        marginRight: '10px',
        marginBottom: '10px'
    },
    delButton: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        justifyContent: 'center',
        width: '120px',
        height: '60px',
        background: 'darkred'
    },
    delButtonCancel: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        justifyContent: 'center',
        width: '120px',
        height: '60px',
        color: 'white',
        background: 'rgba(173, 216, 230, 0.8)'
    },
    hoverOnDiv: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(244, 205, 29, 0.6)',
            boxShadow: '6px 10px 8px rgba(0, 204, 255, 0.4)',
            transition: 'all 0.5s ease'
        }
    },
    hoverOnSelection: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(244, 205, 29, 0.6)',
            transition: 'all 0.5s ease'
        }
    },
    editStyle: {
        border: 'none',
        color: 'white',
        background: 'rgba(173, 216, 230, 0.8)'
    },
    noLine: {
        textDecorationLine: 'none',
        color: 'white'
    }
})
function mapStateToProps(state) {
    return {
        currentQuizInfo: state.currentQuizInfo,
        currentQuizQuestionsInfo: state.currentQuizQuestionsInfo,
        currentQuizAnswersInfo: state.currentQuizAnswersInfo
    }
}
export default connect(mapStateToProps, { setCurrentQuizInfo, setCurrentQuizQuestionsInfo, setCurrentQuizAnswersInfo, getQuizTable })(QuizEditor);