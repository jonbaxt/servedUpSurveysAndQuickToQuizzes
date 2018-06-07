import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
    render() {

        return (
            <div className={css(st.fl, st.jConCen, st.marTop, st.pageStart)}>
                <div className={css(st.boxW, st.borderShadow)} >
                    <h1 className={css(st.texCen)} >Quiz Creator</h1><br /><br />

                    <h3 className={css(st.texCen)} >New Quiz Name</h3><br />
                    <input type='text' placeholder='Enter Quiz Name Here' className={css(st.inputBoxStyled)} value={this.state.newTitle} onChange={(el) => this.handleNewTitle(el.target.value)} /><br /><br />

                    <h3 className={css(st.texCen)} >Description</h3>
                    <p>This will be used to show the a brief description of what the survey is about on the quiz selection page.</p><br />

                    <textarea placeholder='Your Description' rows='5' /><br /><br />

                    <button>Create New Quiz</button>
                    <br />
                </div>

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
    texCen: {
        textAlign: 'center'
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
    shadow: {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.8)',
    },

})

export default QuizCreateStart;