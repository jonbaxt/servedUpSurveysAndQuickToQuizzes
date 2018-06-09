import React from 'react';
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

export default function UserSurveyList(props){
    let userStuff = props.getUser;
    let surveyListTable = props.getSurveys;

    function createUsersSurveys() {
        let userSurveys;
        if(surveyListTable.filter(el => el.survey_owner_id === userStuff.id).length !== 0 ) {
        userSurveys = surveyListTable.filter(el => el.survey_owner_id === userStuff.id).map((el, ind) => {
            return (
                <div className={css(Styles.tempBorder, Styles.tempBorderWide, Styles.quizSurveyBoxes)} key={el.survey_id}>
                    <Link className={css(Styles.linkFormat)} to={`/manage/userssurveys/${userStuff.id}/${el.survey_id}/EditDelete`} >
                    <div >
                        <br/><h3 className={css(Styles.textTitle, Styles.texCen)}>{el.title}</h3><br />
                        <h6 className={css(Styles.textPar, Styles.underLiner)}>Approved by Admin</h6><h6 className={css(Styles.textPar)}>{el.site_approval ? 'Approved for public' : 'Pending Approval'}</h6><br />
                        <img className={css(Styles.picResize)} src={el.start_img} alt='' /><br/>
                    </div>
                    </Link>
                    <br /><br />
                </div>
            )
        });
    } else{
        userSurveys = ( <div className={css(Styles.tempBorder, Styles.quizSurveyBoxes, Styles.fuzzyBeforeHover, Styles.notFuzzy)}>
        <Link className={css(Styles.linkFormat)} to={`/createnew/${userStuff.id}/survey/surveysetup`} >
        <h3 className={css(Styles.textTitle, Styles.texCen)}>You haven't made a Survey. Create one!</h3>
        </Link> <br /><br />
        </div> )
    }
        return (
            <div>
                <br />
                {userSurveys}
            </div>
        )
    }
    return (
        <div className={css(Styles.mainQuizSurveyBox)}>
            {createUsersSurveys()}
        </div>
    )
}
const Styles = StyleSheet.create({
    tempBorder: {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
        transition: '2s all ease',
        // border: '1px solid black'
    },
    tempBorderWide: {
        ':hover': {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
        transition: '2s all ease',
        // border: '1px solid black'
        }
    },
    mainQuizSurveyBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quizSurveyBoxes: {
        width: '280px',
        display: 'flex',
        textAlign: 'start',
        background: 'rgba(51, 0, 0, 0.2)'
    },
    picResize: {
        width: '280px'
    },

    textTitle: {
        fontSize: '25px'
    },
    textPar: {
        fontSize: '15px'
    },
    texCen: {
        textAlign: 'center'
    },
    linkFormat: {
        textDecorationLine: 'none',
        color: '#00ccff'
    },
    fuzzyBeforeHover: {
        opacity: '0.2',
        transition: '2s all ease'
    },
    notFuzzy: {
        ':hover': {
            opacity: '1',
            transition: '2s all ease'
        }
    },
    underLiner: {
        textDecorationLine: 'underline'
    }
})

/*
h1{
  font-size: 40px;
  font-weight: bolder;
}
h2{
  font-size: 30px;
  font-weight: bolder;
}
h3{
  font-size: 20px;
  font-weight: bolder;
}
h4{
  font-size: 10px;
  font-weight: bolder;
}
h5{
  font-size: 5px;
  font-weight: bolder;
}
h6{
  font-size: 3px;
  font-weight: bolder;
}
*/