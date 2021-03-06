import React from 'react';
// import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

// import faImages from '@fortawesome/fontawesome-free-solid/faImages'
// import faToggleOff from '@fortawesome/fontawesome-free-solid/faToggleOff'
// import faToggleOn from '@fortawesome/fontawesome-free-solid/faToggleOn'

import { getNewQuizJustCreated, setSelectedQuiz, getQuizTable, setCurrentQuizInfo } from '../../../ducks/reducer'
import QuesCreate from './QuesCreateComponents/QuesCreate';
import { dirname } from 'path';

class QuizCreateQuestionAnswerBuilder extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfQuestions: 1,
            temporaryQuestionsArrayStore: [],
            temporaryAnswersArrayStore: [],
        }
        this.handleTempQuestionsArrStore = this.handleTempQuestionsArrStore.bind(this);
        this.handleTempAnswersArrStore = this.handleTempAnswersArrStore.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleDelQuestion = this.handleDelQuestion.bind(this);
    }
    componentDidMount() {
        // if(this.props.currentQuizId === -1){
            this.props.getQuizTable();
            console.log(this.props.quizTable)
            this.props.getNewQuizJustCreated(this.props.quizTable[5]);
            this.props.setCurrentQuizInfo(this.props.quizTable[5]);
            this.props.setSelectedQuiz(6);
            // axios.post('/api/sessiondata/current_quiz/set', {quiz_id: 6}).then( (sessData) => console.log('success', sessData)).catch(err => console.log(err));
            // axios.get('/api/sessiondata/currentQuizInfo').then(currentQuizId => {
                // console.log(currentQuizId)
                // this.props.getNewQuizJustCreated(currentQuizId.data)
                // this.props.setSelectedQuiz()})
        // }
        // if (this.props.quizNewCreatedTable.length === 0) {
            // axios.get(`/api/quiztaker/getQuizInfo/${this.props.currentQuizId}`).then((quizInfo) => {
                // this.props.getNewQuizJustCreated(quizInfo.data[0])
            // })
        // }
    }
    componentDidUpdate(prevProps){
        if(prevProps.quizTable.length !== this.props.quizTable.length){
            console.log('updated props')
            this.props.getQuizTable();
            this.props.getNewQuizJustCreated(this.props.quizTable[5]);
            this.props.setCurrentQuizInfo(this.props.quizTable[5]);
            this.props.setSelectedQuiz(6);
        }
    }




    handleTempQuestionsArrStore(e) {
        let addQuestion = this.state.numberOfQuestions + 1;
        this.setState({ temporaryQuestionsArrayStore: [...this.state.temporaryQuestionsArrayStore, e],
        numberOfQuestions: addQuestion
        });
    }
    handleTempAnswersArrStore(e) {
        this.setState({ temporaryAnswersArrayStore: [...this.state.temporaryAnswersArrayStore, e] });
    }
    
    handleAddQuestion() {
        console.log('Add Question Clicked');
        // this.setState({})
    }

    handleDelQuestion() {
        console.log('Delete Question Clicked');
    }

    render() {
        console.log(this.state.temporaryQuestionsArrayStore);
        let createQuestions = this.state.temporaryQuestionsArrayStore.map((el, ind) => {
            return el;
        });
        return (
            <div className={css(st.fl, st.jConCen, st.marTop, st.pageStart, st.flCol)}>
                    <h1 className={css(st.texCen, st.h1Normal, st.h1Tablet, st.h1Laptop, st.h1Biggest)} >All Questions Currently</h1>
                    <div className={css(st.fl, st.jConCen)} >
                    <button
                        onClick={() => this.handleTempQuestionsArrStore(<QuesCreate key={this.state.numberOfQuestions} qNum={this.state.numberOfQuestions}/>) 
                            // this.handleAddQuestion()
                        
                        }>Add Question</button>
                    <button
                        onClick={() => this.handleDelQuestion()}
                        disabled={true}>Delete Question</button>
                        </div>
                        <div className={css(st.fl, st.flCol)}>

                {createQuestions}                  
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
    flCol: {
        flexDirection: 'column',
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
        currentQuizInfo: state.currentQuizInfo,
        quizNewCreatedTable: state.quizNewCreatedTable,
        quizTable: state.quizTable
    }
}

export default connect(mapStateToProps, { getNewQuizJustCreated, setSelectedQuiz, getQuizTable, setCurrentQuizInfo })(QuizCreateQuestionAnswerBuilder);