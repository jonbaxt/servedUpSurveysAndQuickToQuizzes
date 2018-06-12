import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
// import

import { getAllUsers } from '../../../../ducks/reducer';


class UserDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            currentClicked: false,
            inputEditNameStore: '',
            inputEditImgStore: '',

        }
    }
    componentDidMount(){

    }
    handleClicked = () => {
        this.setState({ currentClicked: !this.state.currentClicked,
        
                inputEditNameStore: this.props.giveUser.user_name,
                inputEditImgStore: this.props.giveUser.img,
         })
    }
    handleInputEditNameStore = (e) => {
        this.setState({ inputEditNameStore: e})
    }
    handleInputEditImgStore = (e) => {
        this.setState({ inputEditImgStore: e})
    }

    handleDeleteUser= (userId) => {
        axios.delete(`/api/deleteUserById/${userId}`).then( usersReturn => {
            this.props.getAllUsers(usersReturn.data)
        }).catch( err => console.log(err))
    }

    handleEditUserName = (userId, name) => {
        axios.put(`/api/editUserName/${userId}`, name).then( tableReturn =>{
            this.props.getAllUsers(tableReturn.data)
        }).catch( err => console.log(err))
        console.log( userId, name)
    }

    handleEditUserImage = (userId, image) => {
        console.log( userId, image)
    }

    render() {
        console.log(this.props)
        // console.log(this.props.giveUser.id === this.state.currentClicked)
        let createNewQuizList = this.props.quizTable.filter(el => el.quiz_owner_id === this.props.giveUser.id).map(el => {
            if(el.quiz_owner_id === this.props.giveUser.id){
            return (    
            <div key={el.quiz_id} className={css(st.listFlex)}>
                    <img src={el.start_img} alt='' className={css(st.startPicResize)} />
                    <p>{el.title}</p>
            </div>
            )
        }else if(el.quiz_owner_id !== this.props.giveUser.id){
            return (    
                <div>
                        <p>No Quizzes Owned</p>
                </div>)
        }else {
            return (    
                <div>
                        <p>No Quizzes Owned</p>
                </div>)
        }
            
        })
        let changeDeleteButton = () => {
            if(String(this.props.giveUser.id) === String(this.props.user.id)){
                return ''
            }else {
                return (<button onClick={ () => this.handleDeleteUser(this.props.giveUser.id)}  className={css(anim.editingButtons, anim.buttonsHover)}>Delete User</button>)
            }
        }
        // let changeInputName = () => {

        // }
        return (
            <div className={css(st.mainDetailsBox)}>

                <div className={css(st.alwaysView)} onClick={() => {
                    this.handleClicked()
                    console.log('clicked', this.props.giveUser.id)
                }} >
                    <div>
                        <img src={this.props.giveUser.img} alt='' className={css(st.picResize)} />
                        Id: {this.props.giveUser.id} {this.props.giveUser.user_name}
                    </div>
                    <FontAwesomeIcon icon={faWrench} />
                </div>
                <div className={this.state.currentClicked ? css(dDST.dropDownBox, st.fontInsideSize, anim.dropDown) : css(dDST.dropDownBox, st.fontInsideSize, anim.dropDown, anim.hide)}>
                    {/* <div className={css(st.listFlex)}>
                        <input type='text' value={this.state.inputEditNameStore} onChange={(e) => this.handleInputEditNameStore(e.target.value)} />
                        <button onClick={()=> this.handleEditUserName(this.props.giveUser.id, this.state.inputEditNameStore)} className={css(anim.editingButtons, anim.buttonsHover)}>Edit Name</button>
                    </div>
                    <div className={css(st.listFlex)}>
                        <input type='text' value={this.state.inputEditImgStore} onChange={(e) => this.handleInputEditImgStore(e.target.value)} />
                        <button className={css(anim.editingButtons, anim.buttonsHover)}>Edit Image</button>
                    </div> */}
                        {changeDeleteButton()}
                        
                    <br/>
                    <div>
                        <p className={css(st.texCen)}>{this.props.giveUser.user_name}'s Quizzes</p>
                        {createNewQuizList}
                    </div>
                    <br/>
                    <div>
                        <p className={css(st.texCen)}>{this.props.giveUser.user_name}'s Surveys</p>
                    </div>
                </div>

            </div>
        )
    }
}



const dDST = StyleSheet.create({
    dropDownBox: {
        textAlign: 'left',
        margin: '0 auto',
        fontSize: '10px',
        // background: 'rgba(178, 151, 59, 0.8)',
    },
})


const anim = StyleSheet.create({
    dropDown: {
        overflow: 'auto',
        transition: '1s all ease',
        height: '150px',
    },
    hide: {
        height: '0px'
    },
    editingButtons: {
        width: '90px',
        height: '20px',
        background: 'rgba(178, 151, 59, 0.8)',
        // border: 'none',
        // borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        border: '1px solid white',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(178, 151, 59, 0.5)',
    },
    buttonsHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(178, 151, 59, 0.8)',
            transition: '1s all ease',
        },
    },
})
const st = StyleSheet.create({
    mainDetailsBox: {
        width: '270px',
        borderRadius: '0',
    },
    texCen: {
        textAlign: 'center'
    },
    alwaysView: {
        display: 'flex',
        // width: '100%',
        height: '40px',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picR: {
        width: '50px',
        // borderRadius: '50%',
    },
    picResize: {
        width: '20px',
        borderRadius: '50%',
    },
    listFlex: {
        display: 'flex'
    },
    startPicResize: {
        width: '80px',
        height: '100%',
    },
    fontInsideSize: {
        fontSize: '14px'
    }
})
function mapStateToProps(state) {
    return {
        user: state.user,
        megaQuizTable: state.megaQuizTable,
        megaSurveyTable: state.megaSurveyTable,
        quizTable: state.quizTable,
        surveyTable: state.surveyTable,
    }
}

export default connect(mapStateToProps, { getAllUsers })(UserDetails);