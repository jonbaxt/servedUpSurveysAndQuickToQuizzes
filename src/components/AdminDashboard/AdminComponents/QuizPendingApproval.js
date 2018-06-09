import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'



function QuizPendingApproval(props){
    
    console.log(props)
    return(
        <div className={css(st.surveyUserMainBox)}>
            {QuizPendingBuild(props.giveQuizzes)}
        </div>
    )


}

function QuizPendingBuild(propPass){
    let compileSurveys = propPass.filter(e => e.site_approval === false).map( (el, index) => {
        console.log(el)
        return(<div key={index} className={css(st.managementBuildBox)}>
        <p>Quizzes</p>
            {/* <div><img src={el.img} alt='' className={css(st.picResize)} /> Id: {el.id} {el.user_name} </div>  <div>{dropDownOptions()}</div> */}
        </div>)
    })
    return (
        <div>
            {compileSurveys}
        </div>
    )
}

// function dropDownOptions(){

//     return (
//         <span className={css(st.dropDownBox)}>
//             Drop Down
//         </span>
//     )
// }

const st = StyleSheet.create({
    surveyUserMainBox: {
        width: '98%',
        borderRadius: '5%',
        background: 'rgba(255, 234, 165, 0.9)',
        transition: '1s all ease',
    },
    managementBuildBox: {
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropDownBox: {
        width: '50px',
        // height: '50px',
        background: 'green',
    },
    picResize: {
        width: '20px',
        borderRadius: '50%',
    }
})

export default QuizPendingApproval;