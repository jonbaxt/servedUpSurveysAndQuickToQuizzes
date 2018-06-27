import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { setCurrentQuizInfo } from '../../../../ducks/reducer';
class QuizBuildV3 extends Component {
    constructor() {
        super()
        this.state = {
            titleEditVisibility: false,
            titleInput: '',
            descriptionEditVisibility: false,
            descriptionInput: '',
            imgEditVis: false,
            imgInput: '',
            timedEditVis: false,
        }
    }
    toggleTitleEdit = () => { this.setState({ titleEditVisibility: !this.state.titleEditVisibility }) }
    handleTitleBox = (e) => { this.setState({ titleInput: e }) }
    resetTitleBox = () => { this.setState({ titleInput: '' }) }
    changeTitle = () => {
        const bodyInfo = ['title', this.state.titleInput]
        axios.put(`/api/quizedit/from/quiztable/where/id/${Number(this.props.match.params.quizId)}`, bodyInfo).then(res => {
            this.props.setCurrentQuizInfo(res.data[0])
        }).catch(err => console.log('Didn`t work'))
        this.resetTitleBox();
        this.toggleTitleEdit();
    }
    toggleDescriptionEdit = () => { this.setState({ descriptionEditVisibility: !this.state.descriptionEditVisibility }) }
    handleDescriptionBox = (e) => { this.setState({ descriptionInput: e }) }
    resetDescriptionBox = () => { this.setState({ descriptionInput: '' }) }
    changeDescription = () => {
        const bodyInfo = ['description', this.state.descriptionInput]
        axios.put(`/api/quizedit/from/quiztable/where/id/${Number(this.props.match.params.quizId)}`, bodyInfo).then(res => {
            this.props.setCurrentQuizInfo(res.data[0])
        }).catch(err => console.log('Didn`t work'))
       this.resetDescriptionBox();
        this.toggleDescriptionEdit();
    }
    toggleImgEdit = () => { this.setState({ imgEditVis: !this.state.imgEditVis }) }
    handleImgBox = (e) => { this.setState({ imgInput: e }) }
    resetImgBox = () => { this.setState({ imgInput: '' }) }
    changeImg = () => {
        const bodyInfo = ['start_img', this.state.imgInput]
        axios.put(`/api/quizedit/from/quiztable/where/id/${Number(this.props.match.params.quizId)}`, bodyInfo).then(res => {
            this.props.setCurrentQuizInfo(res.data[0])
        }).catch(err => console.log('Didn`t work'))
       this.resetImgBox();
        this.toggleImgEdit();
    }
    toggleTimedEdit = () => { this.setState({ timedEditVis: !this.state.timedEditVis })}
    changeTimed = () => {
        const bodyInfo = ['timed', !this.props.currentQuizInfo.timed]
        axios.put(`/api/quizedit/from/quiztable/where/id/${Number(this.props.match.params.quizId)}`, bodyInfo).then(res => {
            this.props.setCurrentQuizInfo(res.data[0])
        }).catch(err => console.log('Didn`t work'))
        this.toggleTimedEdit();
    }
    render() {
        // console.log(this.props)
        // console.log(this.props.currentQuizInfo)
        // console.log(this.state.titleInput);
        return (
            <div className={css(st.quizBM)}>
                <br />
                <br />
                <div className={css(st.editorBox)} >
                    <br />
                    <h3>Current Title: </h3>
                    <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleTitleEdit()} > Edit Title </h3>
                    <h3>{this.props.currentQuizInfo.title}</h3>
                    <br />
                </div>
                <div className={this.state.titleEditVisibility ? css(st.dropper) : css(st.dropper, st.hide)}>
                    {/* <h3>New Title</h3> */}
                    <input type='text' placeholder={this.props.currentQuizInfo.title} value={this.state.titleInput} onChange={(e) => this.handleTitleBox(e.target.value)} className={this.state.titleEditVisibility ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                    <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeTitle()} >Change</button><button className={css(st.butty)} onClick={() => {
                        this.toggleTitleEdit()
                        this.resetTitleBox()
                    }} >Cancel</button></div>
                </div>
                <br />
                <div className={css(st.editorBox)} >
                    <br />
                    <h3>Current Description: </h3>
                    <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleDescriptionEdit()} > Edit Description </h3>
                    <p>{this.props.currentQuizInfo.description}</p>
                    <br />
                </div>
                <div className={this.state.descriptionEditVisibility ? css(st.dropper, st.textAreaDrop) : css(st.dropper, st.hide)}>
                    {/* <h3>New Title</h3> */}
                    <textarea type='text' placeholder={this.props.currentQuizInfo.description} value={this.state.descriptionInput} onChange={(e) => this.handleDescriptionBox(e.target.value)} className={this.state.descriptionEditVisibility ? css(st.dropInput, st.textAreaH) : css(st.dropInput, st.hide)} />
                    <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeDescription()} >Change</button><button className={css(st.butty)} onClick={() => {
                        this.toggleDescriptionEdit()
                        this.resetDescriptionBox()
                    }} >Cancel</button></div>
                </div>
                <br />
                <div className={css(st.editorBox)} >
                    <br />
                    <h3>Current Image: </h3>
                    <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleImgEdit()} > Edit Image </h3>
                    <p>This image will be used at the start of your quiz and on the dashboard</p>
                    <br />
                    <img src={this.props.currentQuizInfo.start_img} alt='' style={{ width: '100%' }} />
                    {/* <h3>{this.props.currentQuizInfo.description}</h3> */}
                </div>
                <div className={this.state.imgEditVis ? css(st.dropper) : css(st.dropper, st.hide)}>
                    <p>Find a new URL picture for new start picture.</p>
                    <input type='text' placeholder={this.props.currentQuizInfo.start_img} value={this.state.imgInput} onChange={(e) => this.handleImgBox(e.target.value)} className={this.state.imgEditVis ? css(st.dropInput) : css(st.dropInput, st.hide)} />
                    <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeImg()} >Change</button><button className={css(st.butty)} onClick={() => {
                        this.toggleImgEdit()
                        this.resetImgBox()
                    }} >Cancel</button></div>
                </div>
                <br />
                <div className={css(st.editorBox)} >
                    <br />
                    <h3>Quiz is Currently {this.props.currentQuizInfo.timed ? 'timed' : 'not timed' }</h3>
                    <h3 className={css(st.hider, st.appear, st.shad)} onClick={() => this.toggleTimedEdit()} > Edit Timed </h3>
                </div>
                <div className={this.state.timedEditVis ? css(st.dropper) : css(st.dropper, st.hide)}>

                    <div className={css(st.butDiv)} ><button className={css(st.butty)} onClick={() => this.changeTimed()} >Change Between Timed or Not Timed</button><button className={css(st.butty)} onClick={() => {
                        this.toggleTimedEdit()
                    }} >Cancel</button></div>
                </div>
                <br />
            </div>
        )
    }
}
const st = StyleSheet.create({
    quizBM: { display: 'flex', flexDirection: 'column', margin: '0 auto', },
    editorBox: { width: '310px', background: '#3300CC', boxShadow: '5px 10px 8px #330099', },
    boxW: { background: '#3300CC', transition: '1s all ease', },
    buildBord: { border: '1px solid black', },
    shad: { textShadow: '1px 1px 2px #3300CC', },
    butty: { color: '#00ccff', border: 'none', background: 'white', },
    butDiv: { display: 'flex', justifyContent: 'space-around' },
    hider: { opacity: 0, },
    appear: {
        ':hover': { background: 'rgba(173, 216, 230, 0.8)', opacity: 1, transition: '1s all ease', }
    },
    dropper: { height: '70px', overflow: 'hidden', background: '#3300CC', boxShadow: '5px 10px 8px #330099', transition: '1s all ease', 
    // opacity: 1, 
},
    dropInput: { height: '30px', background: '#00ccff', border: 'none', width: '80%', textAlign: 'center', color: 'white', transition: '1s all ease', opacity: 1, },
    textAreaH: { height: '80px'},
    textAreaDrop: { height: '120px',},
    hide: { height: '0px', 
    // opacity: 0, 
},
})

function mapStateToProps(state) {
    return {
        currentQuizInfo: state.currentQuizInfo,
        // currentQuizQuestionsInfo: state.currentQuizQuestionsInfo,
        // currentQuizAnswersInfo: state.currentQuizAnswersInfo
    }
}
export default connect(mapStateToProps, { setCurrentQuizInfo })(QuizBuildV3);