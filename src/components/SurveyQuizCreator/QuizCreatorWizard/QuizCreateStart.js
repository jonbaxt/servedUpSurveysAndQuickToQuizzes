import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faImages from '@fortawesome/fontawesome-free-solid/faImages'

class QuizCreateStart extends React.Component {
    constructor() {
        super()
        this.state = {
            newTitle: '',
            newDescription: '',
            newStartImg: '',
            newTimed: false,


        }
        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNewDescription = this.handleNewDescription.bind(this);
        this.handleNewStartImg = this.handleNewStartImg.bind(this);
        this.handleNewTimedChange = this.handleNewTimedChange.bind(this);
    }
    handleNewTitle(newTit) {
        console.log(newTit)
        this.setState({ newTitle: newTit })
    }
    handleNewDescription(newDes) {
        console.log(newDes)
        this.setState({ newDescription: newDes })
    }
    handleNewStartImg(newImg) {
        console.log(newImg)
        this.setState({ newStartImg: newImg })
    }
    handleNewTimedChange(trueOrFalse) {
        this.setState({ newTimed: trueOrFalse })
    }
    handleSubmitQuizCreate = () => {
        const compiledAnswer = {
            Title: this.state.newTitle,
            Description: this.state.newDescription,
            Start_Img: this.state.newStartImg,
            Timed: this.state.newTimed,
            Quiz_Owner: this.props.user.id
        }
        axios.post('/api/quizCreation/newQuiz', compiledAnswer).then( (response) => {
            console.log(response)
        }).catch( (err) => console.log(err))

    }
    render() {
        let previewImage = () => { return (this.state.newStartImg !== '' ? <img src={this.state.newStartImg} alt='' className={css(st.picResize)} /> : <div className={css(st.fontResizePicArea)}><FontAwesomeIcon className={css(st.fontResize)} icon={faImages} /></div>) }
        let timedDecision = () => {return ( this.state.newTimed ? <p className={css(st.texCen)} >Quiz will be timed</p> : <p className={css(st.texCen)} >Quiz will not be timed</p>)}

        return (
            <div className={css(st.fl, st.jConCen, st.marTop, st.pageStart)}>
                <div className={css(st.boxW, st.borderShadow)} >
                    <h1 className={css(st.texCen)} >Quiz Creator</h1><br /><br />

                    <h3 className={css(st.texCen)} >New Quiz Name</h3><br />
                    <input type='text' placeholder='Enter Quiz Name Here' className={css(st.inputBoxStyled)} value={this.state.newTitle} onChange={(el) => this.handleNewTitle(el.target.value)} /><br /><br />

                    <h3 className={css(st.texCen)} >Description</h3>
                    <p>This will be used to show the a brief description of what the survey is about on the quiz selection page.</p><br />

                    <textarea className={css(st.textAreaBoxStyled)} value={this.state.newDescription} onChange={(el)=> this.handleNewDescription(el.target.value)} placeholder='Your Description' rows='5' /><br /><br />

                    <h3 className={css(st.texCen)} >Pick a Start Image</h3>
                    <p>Make a start image! Copy a URL and paste into the textbox and see your image here!</p><br />
                    <input className={css(st.inputBoxStyled)} placeholder='URL Link' type='url' onChange={(el) => this.handleNewStartImg(el.target.value)} value={this.state.newStartImg} /><br /><br />

                    {previewImage()}<br /><br />

                    <h3 className={css(st.texCen)} >Timing</h3>
                    <p>Would you like these quiz questions to be timed?</p><br />

                    <div className={css(st.fl, st.spA)} >
                        <button className={css(st.yesNoButtons, st.yesNoHover)} onClick={() => this.handleNewTimedChange(true)} >YES</button> <button className={css(st.yesNoButtons, st.yesNoHover)}  onClick={() => this.handleNewTimedChange(false)}>NO</button>
                        {/* <span>YES</span> <span>NO</span> */}
                    </div><br />
                    {timedDecision()}
                    <br />
                    <div className={css(st.fl, st.jConCen)} ><button className={css(st.createButton, st.yesNoHover)} onClick={()=>this.handleSubmitQuizCreate()}>Create New Quiz</button></div><br />
                </div>
                <br /><br /><br /><br />
            </div>
        )
    }

}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const loopableOpacityKeyframes = { '0%': { opacity: 0 }, '50%': { opacity: 1 }, '100%': { opacity: 0 } }
const st = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    fl: {
        display: 'flex'
    },
    jConCen: {
        justifyContent: 'center'
    },
    spA: {
        justifyContent: 'space-around',
    },
    spB: {
        justifyContent: 'space-between',
    },
    texCen: {
        textAlign: 'center'
    },
    marCen: {
        margin: '0 auto',
    },
    marTop: {
        marginTop: '15px'
    },
    boxW: {
        width: '300px',
        background: '#3300CC'
    },
    borderShadow: {
        boxShadow: '5px 10px 8px #330099'
    },
    inputBoxStyled: {
        marginLeft: '5px',
        fontFamily: 'Oswald, sans-serif',
        border: 'none',
        width: '290px',
        background: 'rgba(0, 204, 255, 0.6)',
        color: 'white',
        '::placeholder': {
            color: 'white'
        },
    },
    textAreaBoxStyled: {
        marginLeft: '5px',
        width: '290px',
        border: 'none',
        fontFamily: 'Oswald, sans-serif',
        color: 'white',
        background: 'rgba(0, 204, 255, 0.6)',
        color: 'white',
        '::placeholder': {
            color: 'white',
            animationName: loopableOpacityKeyframes,
            animationDuration: '1s',
            animationTimingFunction: 'ease',
            animationIterationCount: 'infinite'
        },
    },
    picResize: {
        width: '100%',
        transition: '1s all ease',
    },
    fontResizePicArea: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        transition: '1s all ease',
    },
    fontResize: {
        transition: '1s all ease',
        fontSize: '150px',
    },
    shadow: {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.8)',
    },
    yesNoButtons: {
        width: '80px',
        height: '40px',
        background: 'rgba(0, 204, 255, 0.6)',
        border: 'none',
        borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    yesNoHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
            transition: '1s all ease',
        },
    },
    createButton: {
        width: '140px',
        height: '40px',
        background: 'rgba(0, 204, 255, 0.6)',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '5%',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
})

function mapStateToProps(state){
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, null)(QuizCreateStart);