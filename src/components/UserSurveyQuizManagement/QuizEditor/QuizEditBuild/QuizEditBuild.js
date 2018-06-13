import React from 'react'
import { StyleSheet, css } from 'aphrodite';

import ChangeInputs from './ChangeInputs';
// import CollapseRP from '../../../A-HigherOrderComponents/CollapseRP';

class QuizEditBuild extends React.Component {
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
        console.log(this.state.confirmDeleteBoxVisible)
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

    editBoxChange = () => {
        this.setState({
            editBoxVisible: !this.state.editBoxVisible,
            tempTexBoxSave: ''
        })
    }
    handleSelectedChange = (e) => {
        this.setState({ selectedChange: e })
    }


    render() {
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

        // let editDelete = () => {
            // if (this.props.currentQuizInfo !== 0) {
                return (
                    <div className={css(Styles.editorMainBox)}>
                    <ChangeInputs currentQuizInfo={this.props.currentQuizInfo} />

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
                            <button 
                                // disabled='false'
                                // disabled={this.state.editButtonDisabled}
                                onClick={() => {

                                    console.log('You clicked the edit')
                                    // this.handleEditButttons()
                                    this.handleSelectedChange('title')
                                    this.editBoxChange()

                                }} >Edit</button>
                        </div>


                        <br />
                        <br />

                        {/* <CollapseRP > */}
                        {/* </CollapseRP>                 */}
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.flBox, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Quiz Description</p>
                                <br />
                                <p>{this.props.currentQuizInfo.description}</p>
                                <br />
                            </div>
                            <button 
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
                            <button
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
                            <button 
                                onClick={() => {
                                    this.handleSelectedChange('timed')
                                    this.editBoxChange()
                                }} >Edit</button>
                        </div>
                        <br /><br />
                        <h1>Current Quiz Questions</h1>
                        <br /><br />
                        {/* {quizQuestionsEditor()} */}


                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.flBox, Styles.flSpBt)}>
                            <div className={css(Styles.flBox, Styles.flCol)}>
                                <p>Add a new Question</p>
                                <br />
                            </div>
                            <button 
                                onClick={() => {
                                    this.handleSelectedChange('unknown')
                                    this.editBoxChange()
                                }} >Create Question</button>
                        </div>

                        <br /><br />
                        <div className={css(Styles.borderShadow, Styles.boxW, Styles.boxTablet, Styles.boxLaptop, Styles.boxBiggest, Styles.marTandB, Styles.flBox, Styles.flCol, 
                            
                            // Styles.hoverOnDiv
                            )}>
                            <span
                                className={css(Styles.delButton)}
                                onClick={() => {
                                    this.confirmDeleteBoxChange()
                                    // this.handleDeleteQuizButton();
                                    console.log('NO DON`T DELETE IT! CHERISH IT!')
                                }} >DELETE QUIZ</span>
                            <p>WARNING: CLICKING THIS WILL REMOVE QUIZ COMPLETELY</p>
                            <br />
                        </div><br /><br /><br /><br /><br />
                    </div>
                )
            // }
        // }
    }
}
// ===================ANIMATION VAIRABLE===============================================================================================
// const initialOpacityKeyframes = {
//     'from': { opacity: 0 },
//     'to': { opacity: 1 }
// }
// const outOpacityKeyframes = {
//     'from': { opacity: 1, },
//     'to': { opacity: 0 }
// }
// const initialTranslateKeyframes = {
//     '0%': { transform: 'translateX(-200px)' },
//     '100%': { transform: 'translateX(0px)' }
// }
// const outTranslateKeyframes = {
//     '0%': { transform: 'translateX(300px)' },
//     '100%': { transform: 'translateX(0px)' }
// }

/*
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
        // display: 'flex',
        // justifyContent: 'center',
        // transform: '1s all ease',
        // overflow: 'hidden',
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        // width: '100%',
        width: '310px',
        // height: '400px',
        // height: '500px',
        position: 'fixed'
    },
    hideQuestionEditor: {
        // transform: '1s all ease',
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        // width: '0%',
        // width: '310px',
        // height: '0px',
        // height: '500px',
        position: 'absolute',
        left: '-400px'
    },
    displayAnswerEditor: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        // overflow: 'visible',
        // overflow: 'scroll',
        overflow: 'auto',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        height: '600px',
        width: '310px',
        // left: '50px',
        position: 'fixed'
    },
    hideAnswerEditor: {
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationIterationCount: 'initial',
        background: 'rgba(51, 0, 204, 0.8)',
        width: '310px',
        // height: '600px',
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
*/

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
export default QuizEditBuild;