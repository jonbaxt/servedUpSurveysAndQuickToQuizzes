import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faCofee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
// import faCopy from '@fortawesome/fontawesome-free-solid/faCopy'
// import faChartPie from '@fortawesome/fontawesome-free-solid/faChartPie'
// import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faChartArea from '@fortawesome/fontawesome-free-solid/faChartArea'
import faFolderOpen from '@fortawesome/fontawesome-free-solid/faFolderOpen'
import faEject from '@fortawesome/fontawesome-free-solid/faEject'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'

// function NavMenu() {
class NavMenu extends Component {
    constructor() {
        super()
        this.state = {
            showNav: false
        }
    }

    changeVisibility = () => {
        if(this.props.pathnameCurrent.length !== 0){
            if(this.props.pathnameCurrent[0] !== '/'){
                return css(hideStyles.visNav, Styles.topNav, Styles.trans)
            }else{
                return css(hideStyles.hidNav, Styles.topNav)
            }
        }else{
            return css(Styles.topNav, Styles.trans)
        }
    }

    showNavFn = () => {
        this.setState({ showNav: !this.state.showNav })
        // console.log(this.state.showNav)
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.pathnameCurrent)
        let showImage = () => {
            if(this.props.user){
                return (<img className={css(Styles.userImg, Styles.tabletUserImage, Styles.laptopUserImage, Styles.biggestUserImage)} src={this.props.user.img} alt='' />)
            }else{
                return(<div></div>)
            }
        }
        return (
            <header className={this.changeVisibility()}>
            {/* <header className={css(Styles.topNav, Styles.trans)}> */}
                <div
                    className={css(Styles.topArea)}
                >
                    <div className={css(Styles.flR)}>
                        {showImage()}
                        <Link className={css(Styles.noLine)} to={`/Dashboard/${this.props.user.id}`} >
                        {/* <Link className={css(Styles.noLine)} to={`/Dashboard`} > */}
                            <h1 className={css(Styles.hTag, Styles.hTagTablet, Styles.hTagLaptop, Styles.hTagBiggest)}>
                                <FontAwesomeIcon icon={faCofee} />
                                Served Up Surveys
                </h1>
                        </Link>
                    </div>
                    <FontAwesomeIcon icon={faBars}
                        className={css(Styles.threeBarImage, Styles.hTagTablet, Styles.hTagLaptop, Styles.hTagBiggest)}
                        onClick={this.showNavFn}
                    />
                    {/* <img className={css(Styles.threeBarImage)} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
                        alt=''
                        onClick={this.showNavFn} /> */}
                </div>
                <div
                    // className={css (this.state.showNav ? Styles.dropDown : Styles.dropDown, Styles.hide )}>
                    className={this.state.showNav ?
                        css(Styles.dropDown, Styles.dropDownTablet, Styles.dropDownLaptop, Styles.dropDownBiggest) :
                        css(Styles.dropDown, Styles.hide)
                    }>
                    <div className={css(Styles.dropDownInnerBox)}>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/createnew/${this.props.user.id}/start`} >
                        {/* <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/createnew/userId/start`} > */}
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => {
                                this.showNavFn()
                                console.log('Clicked Create Survey/Quiz')}}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faPlus} />
                                <span>Create Survey/Quiz</span>
                            </span>
                        </Link>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to='/results/quiz/allquizresults' >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => { this.showNavFn()
                                console.log('Clicked Results')}}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faChartArea} />
                                <span>Results</span>
                            </span>
                        </Link>
                    </div>
                    <div className={css(Styles.dropDownInnerBox)}>
                        {/* <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/manage/userssurveys/userId`} > */}
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/manage/userssurveys/${this.props.user.id}`} >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => { this.showNavFn()
                                console.log('Clicked Your Surveys and Quizzes')}}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faFolderOpen} />
                                <span>Your Surveys and Quizzes</span>
                            </span>
                        </Link>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to='/' >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => { this.showNavFn()
                                console.log('Clicked Logout')}}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faEject} />
                                <span>Logout</span>
                            </span>
                        </Link>
                    </div>
                    {/* <ul>
                        <li className={css(Styles.showBorder)}>Create Survey/Quiz</li>
                        <li className={css(Styles.showBorder)}>Your Surveys</li>
                        <li className={css(Styles.showBorder)}>See Results</li>
                        <li className={css(Styles.showBorder)}>Logout</li>
                    </ul> */}
                </div>
            </header>
        )
    }
}

const hideStyles = StyleSheet.create({
    visNav: {
        visibility: 'visible',
    },
    hidNav: {
        visibility: 'hidden',
    },
});

const Styles = StyleSheet.create({
    topNav: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        // width: '318px',
        width: '100%',
        // background: '#FFFF99',
        background: 'linear-gradient(to left, #009966, #009999, #0099CC, #0099FF, #00CCCC, #00CCFF, #00FFFF)',
        // #009966, #009999, #0099CC, #0099FF, #00CCCC, #00CCFF, #00FFFF
        // src: "url('coolfont.woff2') format('woff2')",
        marginTop: '0'
    },
    trans: {
        transition: '1s all ease'
    },
    hTag: {
        marginLeft: '0px',
        fontSize: '20px',
        transition: '1s all ease',
    },
    threeBarImage: {
        marginRight: '15px',
        // width: '30px',
        // height: '30px',
        color: 'black'
    },
    topArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropDown: {
        display: 'flex',
        textAlign: 'center',
        overflow: 'hidden',
        transition: '1s all ease',
        // transition: '1s all ease',
        // alignItems: 'center'
        height: '150px',
        justifyContent: 'space-around'
    },
    hide: {
        height: '0px'
    },
    dropDownInnerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dropDownInnerInnerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    iconLarge: {
        fontSize: '40px',
        transition: '1s all ease',
    },
    showBorder: {
        border: '1px solid black'
    },
    noLine: {
        textDecorationLine: 'none',
        color: 'black'
    },
    userImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        transition: '1s all ease'
    },
    flR: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tabletUserImage: {
        '@media (min-width: 490px)': {
            width: '50px',
            height: '50px',
            transition: '1s all ease',
        },
    },
    laptopUserImage: {
        '@media (min-width: 700px)': {
            width: '60px',
            height: '60px',
            transition: '1s all ease',
        },
    },
    biggestUserImage: {
        '@media (min-width: 1400px)': {
            width: '70px',
            height: '70px',
            transition: '1s all ease',
        }
    },
    hTagTablet: {
        '@media (min-width: 490px)': {
            fontSize: '30px',
            transition: '1s all ease',
        },
    },
    hTagLaptop: {
        '@media (min-width: 700px)': {
            fontSize: '40px',
            transition: '1s all ease',
        },
    },
    hTagBiggest: {
        '@media (min-width: 1400px)': {
            fontSize: '50px',
            transition: '1s all ease',
        }
    },
    iconTablet: {
        '@media (min-width: 490px)': {
            fontSize: '50px',
            transition: '1s all ease',
        },
    },
    iconLaptop: {
        '@media (min-width: 700px)': {
            fontSize: '60px',
            transition: '1s all ease',
        },
    },
    iconBiggest: {
        '@media (min-width: 1400px)': {
            fontSize: '70px',
            transition: '1s all ease',
        }
    },
    dropDownTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            height: '190px',
        },
    },
    dropDownLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            height: '230px',
        },
    },
    dropDownBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            height: '260px',
        }
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

let mapStateToProps = (state) => {
    return {
        user: state.user,
        pathnameCurrent: state.pathnameCurrent,
    }
}

export default connect(mapStateToProps, null)(NavMenu);