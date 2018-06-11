import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faImages from '@fortawesome/fontawesome-free-solid/faImages'
// import faToggleOff from '@fortawesome/fontawesome-free-solid/faToggleOff'
// import faToggleOn from '@fortawesome/fontawesome-free-solid/faToggleOn'

import { getNewQuizJustCreated } from '../../../ducks/reducer'
import QuesCreate from './QuesCreateComponents/QuesCreate';

class QuizCreateQuestionAnswerBuilder extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfQuestions: 1,
            temporaryQuestionsArrayStore: [],
            temporaryAnswersArrayStore: [],
            newTitle: '',
            newDescription: '',
            newStartImg: '',
            newTimed: false,
            toggler: false
        }
        this.handleTempQuestionsArrStore = this.handleTempQuestionsArrStore.bind(this);
        this.handleTempAnswersArrStore = this.handleTempAnswersArrStore.bind(this);
        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNewDescription = this.handleNewDescription.bind(this);
        this.handleNewStartImg = this.handleNewStartImg.bind(this);
        this.handleNewTimedChange = this.handleNewTimedChange.bind(this);
    }
    componentDidMount() {
        if (this.props.quizNewCreatedTable.length === 0) {
            axios.get(`/api/quiztaker/getQuizInfo/${this.props.currentQuizId}`).then((quizInfo) => {
                this.props.getNewQuizJustCreated(quizInfo.data[0])
            })
        }
    }
    handleTempQuestionsArrStore(e) {
        this.setState({ temporaryQuestionsArrayStore: [...this.state.temporaryQuestionsArrayStore, e] })
    }
    handleTempAnswersArrStore(e) {
        this.setState({ temporaryAnswersArrayStore: [...this.state.temporaryAnswersArrayStore, e] })
    }
    handleAddQuestion = (newQuestion) => {
        this.setState({
            numberOfQuestions: ++this.state.numberOfQuestions,

        })
    }
    handleDelQuestion = () => {
        this.setState({ numberOfQuestions: --this.state.numberOfQuestions })
    }
    handleAdd = (newQuestion) => {
        this.setState({ temporaryQuestionsArrayStore: [...this.state.temporaryQuestionsArrayStore, newQuestion] })
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
            console.log(response)
        }).catch((err) => console.log(err))
    }
    render() {
        let createQuestions = () => {
            // if(this.state.temporaryQuestionsArrayStore.length !== 0)


            // for ( var i=0; i<this.state.numberOfQuestions; i++ ){
            //     return <QuesCreate key={i} giveQuesNum={i+1} />
            // }
            return (<div>
                <QuesCreate key={1} giveQuesNum={1} />
            </div>)
            // }
        }
        let previewImage = () => { return (this.state.newStartImg !== '' ? <img src={this.state.newStartImg} alt='' className={css(st.picResize)} /> : <div className={css(st.fontResizePicArea)}><FontAwesomeIcon className={css(st.fontResize, st.fontResizeTablet, st.fontResizeLaptop, st.fontResizeBiggest)} icon={faImages} /></div>) }
        return (
            <div className={css(st.fl, st.jConCen, st.marTop, st.pageStart)}>
                <div className={css(st.boxW, st.boxWTablet, st.boxWLaptop, st.boxWBiggest, st.borderShadow)} >
                    {/* <h1></h1> */}
                    <h1 className={css(st.texCen, st.h1Normal, st.h1Tablet, st.h1Laptop, st.h1Biggest)} >All Questions Currently</h1>

                    <button
                        onClick={() => this.handleAddQuestion()}>Add Question</button>
                    <button
                        onClick={() => this.handleDelQuestion()}>Delete Question</button>

                    <br /><br /><br /><br />

                    <br /><br /><br />
                    {createQuestions()}








                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 className={css(st.texCen, st.h1Normal, st.h1Tablet, st.h1Laptop, st.h1Biggest)} >Question Maker</h1><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Question Text</h3><br />
                    <input type='text' placeholder='Enter Quiz Name Here' className={css(st.inputBoxStyled, st.inputBoxStyledTablet, st.inputBoxStyledLaptop, st.inputBoxStyledBiggest)} value={this.state.newTitle} onChange={(el) => this.handleNewTitle(el.target.value)} /><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Description</h3>
                    <p className={css(st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)}>This will be used to show the a brief description of what the survey is about on the quiz selection page.</p><br />

                    <textarea className={css(st.textAreaBoxStyled, st.textAreaBoxStyledTablet, st.textAreaBoxStyledLaptop, st.textAreaBoxStyledBiggest)} value={this.state.newDescription} onChange={(el) => this.handleNewDescription(el.target.value)} placeholder='Your Description' rows='5' /><br /><br />

                    <h3 className={css(st.texCen, st.h3Normal, st.h3Tablet, st.h3Laptop, st.h3Biggest)} >Pick a Start Image</h3>
                    <p className={css(st.pNormal, st.pTablet, st.pLaptop, st.pBiggest)}>Make a start image! Copy a URL and paste into the textbox and see your image here!</p><br />
                    <input className={css(st.inputBoxStyled, st.inputBoxStyledTablet, st.inputBoxStyledLaptop, st.inputBoxStyledBiggest)} placeholder='URL Link' type='url' onChange={(el) => this.handleNewStartImg(el.target.value)} value={this.state.newStartImg} /><br /><br />

                    {previewImage()}<br /><br />
                </div>
            </div>
        )
    }

}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const translateKeyframes = {
    '0%': {
        transform: 'translateX(0px)',
    },

    '50%': {
        transform: 'translateX(50px)',
    },

    '100%': {
        transform: 'translateX(100px)',
    },
};
const loopableOpacityKeyframes = { '0%': { opacity: 0 }, '50%': { opacity: 1 }, '100%': { opacity: 0 } }
const st = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    transAnimation: {
        animationName: translateKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease',
        animationIterationCount: 'initial'
    },
    trans: {
        transition: '1s all ease',
        fontSize: '150px'
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
        background: '#3300CC',
        transition: '1s all ease',
        borderRadius: '1%',
    },
    boxWTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            width: '450px',
        }
    },
    boxWLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            width: '650px',
        }
    },
    boxWBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            width: '900px',
        }
    },
    borderShadow: {
        boxShadow: '5px 10px 8px #330099'
    },
    inputBoxStyled: {
        marginLeft: '5px',
        fontFamily: 'Oswald, sans-serif',
        border: 'none',
        fontSize: '18px',
        width: '290px',
        background: 'rgba(0, 204, 255, 0.6)',
        transition: '1s all ease',
        color: 'white',
        '::placeholder': {
            color: 'white'
        },
    },
    inputBoxStyledTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px',
            width: '440px'
        }
    },
    inputBoxStyledLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px',
            width: '640px'
        }
    },
    inputBoxStyledBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px',
            width: '880px'
        }
    },
    textAreaBoxStyled: {
        marginLeft: '5px',
        width: '290px',
        border: 'none',
        fontFamily: 'Oswald, sans-serif',
        transition: '1s all ease',
        fontSize: '18px',
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
    textAreaBoxStyledTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px',
            width: '440px'
        }
    },
    textAreaBoxStyledLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px',
            width: '640px'
        }
    },
    textAreaBoxStyledBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px',
            width: '880px'
        }
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
    fontResizeTablet: {
        '@media (min-width: 490px)': {
            fontSize: '240px',
            transition: '1s all ease',
        }
    },
    fontResizeLaptop: {
        '@media (min-width: 700px)': {
            fontSize: '320px',
            transition: '1s all ease',
        }
    },
    fontResizeBiggest: {
        '@media (min-width: 1400px)': {
            fontSize: '500px',
            transition: '1s all ease',
        }
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
    h1Normal: {
        transition: '1s all ease',
        fontSize: '40px'
    },
    h1Tablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '50px'
        }
    },
    h1Laptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '60px'
        }
    },
    h1Biggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '70px'
        }
    },
    h3Normal: {
        transition: '1s all ease',
        fontSize: '20px'
    },
    h3Tablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '30px'
        }
    },
    h3Laptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '40px'
        }
    },
    h3Biggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '50px'
        }
    },
    pNormal: {
        transition: '1s all ease',
        fontSize: '18px'
    },
    pTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px'
        }
    },
    pLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px'
        }
    },
    pBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px'
        }
    }

})

function mapStateToProps(state) {
    return {
        user: state.user,
        currentQuizId: state.currentQuizId,
        quizNewCreatedTable: state.quizNewCreatedTable
    }
}

export default connect(mapStateToProps, { getNewQuizJustCreated })(QuizCreateQuestionAnswerBuilder);