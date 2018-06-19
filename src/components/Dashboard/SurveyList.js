import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loadingHOC from '../A-HigherOrderComponents/LoadingHOC';
import { setSelectedSurvey } from '../../ducks/reducer'

class SurveyList extends React.Component {

    render() {
        let showSurveyList = this.props.surveyTable.filter(el => el.site_approval === true ).map((element, index) => {
            return (
                <Link to={`/${this.props.user.id}/survey/${element.survey_id}/start`} key={element.survey_id} onClick={() => this.props.setSelectedSurvey(element.survey_id)}
                    className='noLineUnderneath'
                    style={{ textDecoration: 'none' }} >
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
                                <p className='underline'>Created by</p> <p>{element.survey_creator}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })

        return (
            <div className='wrapWhenBig'>
                {showSurveyList}
            </div>
        )
    }

}

export default connect(null, { setSelectedSurvey } )(loadingHOC(SurveyList))