import React from 'react';
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function UserQuizList(props) {

    let userStuff = props.getUser;
    let quizListTable = props.getQuizzes;

    function createUsersQuizzes() {
        let userQuizzes;
        if (quizListTable.filter(el => el.quiz_owner_id === userStuff.id).length !== 0 ) {
        userQuizzes = quizListTable.filter(el => el.quiz_owner_id === userStuff.id).map((el, ind, origAr) => {
                return (
                    <div className={css(Styles.tempBorder, Styles.titles, Styles.quizSurveyBoxes, Styles.tempBorderWide)} key={el.quiz_id}>
                        
                        <Link className={css(Styles.linkFormat)} to={`/manage/usersquizzes/${userStuff.id}/${el.quiz_id}/EditDelete`} >
                        <div >
                            <br/><h3 className={css(Styles.textTitle, Styles.texCen)}>{el.title}</h3><br />
                            <h6 className={css(Styles.textPar, Styles.underLiner)}>Approved by Admin</h6><h6 className={css(Styles.textPar)}>{el.site_approval ? 'Approved for public' : 'Pending Approval'}</h6><br />
                            <img className={css(Styles.picResize)} src={el.start_img} alt='' /><br/>
                        </div>
                        </Link>
                        
                    </div>
                )
        });
    } else {
        userQuizzes = ( <div className={css(Styles.tempBorder, Styles.titles, Styles.quizSurveyBoxes, Styles.tempBorderWide)}>
        <Link className={css(Styles.linkFormat)} to={`/createnew/${userStuff.id}/quiz/quizsetup`} >
        <h3 className={css(Styles.textTitle, Styles.texCen)}>You haven't made a Quiz. Create one!</h3>
        </Link>
        </div> )
    }
        return (
            <div>
                <br />
                {userQuizzes}
                <br/>
            </div>
        )
    }

    return (
        <div className={css(Styles.mainQuizSurveyBox)} >
            {createUsersQuizzes()}
        </div>
    )

}

const Styles = StyleSheet.create({
    titles: {
        background: 'linear-gradient(to left,#330000, #330033, #330066, #330099, #3300CC, #3300FF)',
        paddingLeft: '0px',
        paddingRight: '0px',
        margin: '2px',
        marginTop: '0px',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
    },
    tempBorder: {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
        transition: '2s all ease',
    },
    tempBorderWide: {
        ':hover': {
        background: 'linear-gradient(to left, rgba(51, 0, 0, 0.6), rgba(51, 0, 51, 0.6), rgba(51, 0, 102, 0.6), rgba(51, 0, 153, 0.6), rgba(51, 0, 204, 0.6), rgba(51, 0, 255, 0.6))',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
        transition: '2s all ease',
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
        marginBottom: '8px',
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