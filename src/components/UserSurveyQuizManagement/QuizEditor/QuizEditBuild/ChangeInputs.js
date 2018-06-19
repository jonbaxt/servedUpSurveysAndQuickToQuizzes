import React from 'react'
import { StyleSheet, css } from 'aphrodite';

class ChangeInputs extends React.Component {
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
        // console.log(this.state.confirmDeleteBoxVisible)
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


    render() {
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
export default ChangeInputs;