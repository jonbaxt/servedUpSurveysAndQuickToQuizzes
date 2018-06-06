import React from 'react';
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function UserQuizList(props) {

    let userStuff = props.getUser;
    let quizListTable = props.getQuizzes;
    // console.log(userStuff)
    // console.log(quizListTable)

    function createUsersQuizzes() {
        let userQuizzes;
        // console.log(quizListTable.filter(el => el.quiz_owner_id === userStuff.id).length)
        if (quizListTable.filter(el => el.quiz_owner_id === userStuff.id).length !== 0 ) {
        userQuizzes = quizListTable.filter(el => el.quiz_owner_id === userStuff.id).map((el, ind, origAr) => {
                return (
                    <div className={css(Styles.tempBorder, Styles.tempBorderWide, Styles.quizSurveyBoxes)} key={el.quiz_id}>
                    {/*<div className={css(Styles.tempBorder, Styles.quizSurveyBoxes, Styles.fuzzyBeforeHover, Styles.notFuzzy)} key={el.quiz_id}>*/}
                        <Link className={css(Styles.linkFormat)} to={`/manage/usersquizzes/${userStuff.id}/${el.quiz_id}/EditDelete`} >
                        <div >
                            <br/><h3 className={css(Styles.textTitle, Styles.texCen)}>{el.title}</h3><br />
                            {/* <h5 className={css(Styles.textPar)}>Your Description: {el.description}</h5><br /> */}
                            <h6 className={css(Styles.textPar, Styles.underLiner)}>Approved by Admin</h6><h6 className={css(Styles.textPar)}>{el.site_approval ? 'Approved for public' : 'Pending Approval'}</h6><br />
                            {/* <h5 className={css(Styles.textPar)}>Date Created: {el.created_on}</h5>
                            <h5 className={css(Styles.textPar)}>Last Updated: {el.updated_on}</h5> */}


                            <img className={css(Styles.picResize)} src={el.start_img} alt='' /><br/>
                        </div>
                        </Link>
                    </div>
                )
        });
    } else {
        userQuizzes = ( <div className={css(Styles.tempBorder, Styles.quizSurveyBoxes, Styles.fuzzyBeforeHover, Styles.notFuzzy)}>
        <Link className={css(Styles.linkFormat)} to={`/quizcreator/usersquizzes/${userStuff.id}/createnew`} >
        <h3 className={css(Styles.textTitle, Styles.texCen)}>You haven't made a Quiz. Create one!</h3>
        </Link>
        </div> )
    }
        // console.log(userQuizzes)
        return (
            <div>
                <br />
                {userQuizzes}
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