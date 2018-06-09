import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'

export default class UserDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            currentClicked: false,
        }
    }
    handleClicked = () => {
        this.setState({ currentClicked: !this.state.currentClicked })
    }

    render() {
        // console.log(this.props.giveUser.id === this.state.currentClicked)
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
                <FontAwesomeIcon  icon={faWrench} />
                </div>
                <div className={this.state.currentClicked ? css(dDST.dropDownBox, anim.dropDown) : css(dDST.dropDownBox, anim.dropDown, anim.hide)}>
                    <div>
                        <h4>UserId</h4>
                        <h4>{this.props.giveUser.id}</h4>
                    </div>
                    <div>
                        <p>UserName</p> <span>EDIT</span>
                        {this.props.giveUser.user_name}
                    </div>
                    <div>
                        <p>User Picture</p>
                        <img src={this.props.giveUser.img} alt='' className={css(st.picR)} />
                    </div>
                    <div>
                        <p>Users Quizzes</p>
                    </div>
                    <div>
                        <p>Users Surveys</p>
                    </div>
                    <div>
                        <button>DELETE USER</button>
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
        background: 'rgba(178, 151, 59, 0.8)',
    },
})


const anim = StyleSheet.create({
    dropDown: {
        overflow: 'hidden',
        transition: '1s all ease',
        height: '150px',
    },
    hide: {
        height: '0px'
    },
})
const st = StyleSheet.create({
    mainDetailsBox: {
        width: '270px',
        borderRadius: '0',
    },
    texCen:{
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
    }
})