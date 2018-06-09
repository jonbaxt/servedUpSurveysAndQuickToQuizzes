import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';


import UserDetails from './UserDetails';


class SurveyUserManagement extends React.Component {
    constructor(){
        super()
        this.state = {
            naming: '',
            options: [],
            optionsToggle: false,
            currentSurveyUserClicked: -1,
        }
    }
    componentDidMount(){
        for( var i=0; i<this.props.surveyUsersTable.length; i++){
            console.log(this.props.surveyUsersTable[i])
            this.handleNaming(this.props.surveyUsersTable[i].user_name)
        }
        
        console.log(this.props.surveyUsersTable.length)
    }
    handleCurrentSurveyUserClicked = (e) => {
        this.setState({ currentSurveyUserClicked: e })
    }

    handleOptions = (e) => {
        this.setState({
            options: [...this.state.options,  [this.state.naming, false] ]
        })
    }
    handleNaming = (e) => {
        this.setState({ naming: e })
    }
    handleOptionsToggle = () => {
        this.setState({ optionsToggle: !this.state.optionsToggle })
    }


    render(){
        // console.log(this.props.surveyUsersTable.length)
        // console.log(this.props.surveyUsersTable);
        // console.log(this.state.naming);
        // console.log(this.state.options)

        // if(this.state.options.length === 0){


            
        // }
        let wasClicked = false;
        // let switchCaret = () => {
            //     return (this.state.optionsToggle ? <FontAwesomeIcon icon={faCaretSquareDown} onClick={() => this.handleOptionsToggle()} /> : <FontAwesomeIcon icon={faCaretSquareUp} onClick={() => this.handleOptionsToggle()} />)
            // }
            
            // console.log(this.props)
            return(
                <div className={css(st.surveyUserMainBox)}>
            {SurveyUsersManagementBuild(this.props, this.state, this.handleCurrentSurveyUserClicked, wasClicked)}
        </div>
    )
    
}
}

function SurveyUsersManagementBuild(propPass, currentState, handleCurrentUserClicked, wasClicked){
    let compileUsers = propPass.surveyUsersTable.map( (el, index) => {
        return(
        <div key={index} className={css(st.managementBuildBox)}>
            <div>
            <UserDetails giveUser={el} giveTheState={currentState} />
            </div>
        </div>)
    })
    return (
        <div>
            {compileUsers}
        </div>
    )
}


/*toggleOptions()*/

const st = StyleSheet.create({
    surveyUserMainBox: {
        width: '98%',
        // borderRadius: '5%',
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
        fontSize: '10px',
        width: '50px',
        // height: '50px',
        background: 'green',
    },
    texR: {
        textAlign: 'right'
    },
    marR: {
        marginRight: '5px',
    },
    fl: {
        display: 'flex',
    },
    flR: {
        flexDirection: 'row',
    },
    flC: {
        flexDirection: 'column',
    },

})

let mapStateToProps = (state) =>{
    return {
        surveyUsersTable: state.surveyUsersTable,
        surveyAdminsTable: state.surveyAdminsTable,
        megaQuizTable: state.megaQuizTable,
        megaSurveyTable: state.megaSurveyTable,
    }
}
export default connect(mapStateToProps, null)(SurveyUserManagement);