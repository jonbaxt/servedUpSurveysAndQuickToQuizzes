import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loadingHOC from '../A-HigherOrderComponents/LoadingHOC';
import { setSelectedQuiz } from '../../ducks/reducer'

class QuizList extends React.Component {
    render() {
        let showQuizList = this.props.quizTable.filter(el => el.site_approval === true).map((element, index) => {
            return (
                <Link to={`/${this.props.user.id}/quiz/${element.quiz_id}/start`} key={element.quiz_id} onClick={() => this.props.setSelectedQuiz(element.quiz_id)} style={{ textDecoration: 'none' }} className='noLineUnderneath' >
                    <div className='displayBox'  >
                        <div className='rightSide'>
                            <div className='leftSide'>
                                <img className='linkPicture' src={element.start_img} alt='' />
                            </div>
                            <div className='marBot'>
                                <h4>{element.title}</h4>
                            </div>
                            <div>
                                <p className='underline'>Description</p>
                                <p>{element.description}</p>
                            </div>
                            <div className='centerBox'>
                                <p className='underline'>Created by</p><p>{element.quiz_creator}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className='wrapWhenBig'>
                {showQuizList}
            </div>
        )
    }
}
export default connect(null, { setSelectedQuiz })(loadingHOC(QuizList))