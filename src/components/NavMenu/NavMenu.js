import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faBars, faChartArea, faFolderOpen, faEject, faPlus } from '@fortawesome/free-solid-svg-icons'
// import faBars from '@fortawesome/fontawesome-free-solid/faBars'


// import faCopy from '@fortawesome/fontawesome-free-solid/faCopy'
// import faChartPie from '@fortawesome/fontawesome-free-solid/faChartPie'
// import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'




// import faChartArea from '@fortawesome/fontawesome-free-solid/faChartArea'
// import faFolderOpen from '@fortawesome/fontawesome-free-solid/faFolderOpen'
// import faEject from '@fortawesome/fontawesome-free-solid/faEject'
// import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'

import { resetReduxToInitialState, setCurrentPathname } from '../../ducks/reducer'

class NavMenu extends Component {
    constructor() {
        super()
        this.state = {
            showNav: false,
            currentAdmin: '',
        }
    }
    componentDidMount() {
        if (this.props.surveyAdminsTable.length === 0) {
            let thisAdmin = this.props.surveyAdminsTable.filter(el => el.survey_user_id === this.props.user.id);
            this.setState({ currentAdmin: thisAdmin })
        }
    }
    changeVisibility = () => {
        if (this.props.pathnameCurrent.length !== 0) {
            if (this.props.pathnameCurrent[0] !== '/') {
                return css(hideStyles.visNav, Styles.topNav, Styles.trans)
            } else {
                return css(hideStyles.hidNav, Styles.topNav)
            }
        } else {
            return css(Styles.topNav, Styles.trans)
        }
    }
    showNavFn = () => {
        this.setState({ showNav: !this.state.showNav })
    }
    render() {
        let showImage = () => {
            if (this.props.user) {
                return (<img className={css(Styles.userImg, Styles.tabletUserImage, Styles.laptopUserImage, Styles.biggestUserImage)} src={this.props.user.img} alt='' />)
            } else {
                return (<div></div>)
            }
        }
        let adminPrivilegeLink = () => {
            if (this.state.currentAdmin !== '') {
                return (<div><Link to={`/Admin/Dashboard/${this.props.user.id}/AdminView`}>{showImage()}</Link></div>)
            } else {
                return (<div>{showImage()}</div>)
            }
        }

        return (
            <header className={this.changeVisibility()}>
                <div
                    className={css(Styles.topArea)}
                >
                    <div className={css(Styles.flR)}>
                        {adminPrivilegeLink()}
                        <Link className={css(Styles.noLine)} to={`/Dashboard/${this.props.user.id}`} >
                            <h1 className={css(Styles.hTag, Styles.hTagTablet, Styles.hTagLaptop, Styles.hTagBiggest)}>
                                <FontAwesomeIcon icon={faCoffee} />
                                Served Up Surveys
                </h1>
                        </Link>
                    </div>
                    <FontAwesomeIcon icon={faBars}
                        className={css(Styles.threeBarImage, Styles.hTagTablet, Styles.hTagLaptop, Styles.hTagBiggest)}
                        onClick={this.showNavFn}
                    />
                </div>
                <div
                    className={this.state.showNav ?
                        css(Styles.dropDown, Styles.dropDownTablet, Styles.dropDownLaptop, Styles.dropDownBiggest) :
                        css(Styles.dropDown, Styles.hide)
                    }>
                    <div className={css(Styles.dropDownInnerBox)}>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/createnew/${this.props.user.id}/start`} >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => {
                                this.showNavFn()
                                // console.log('Clicked Create Survey/Quiz')
                            }}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faPlus} />
                                <span>Create Survey/Quiz</span>
                            </span>
                        </Link>
                        <Link
                            className={css(Styles.dropDownInnerInnerBox, Styles.noLine)}
                            to={`/mainresults/resultsnavredirect/${this.props.user.id}/home`} >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => {
                                this.showNavFn()
                                // console.log('Clicked Results')
                            }}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faChartArea} />
                                <span>Results</span>
                            </span>
                        </Link>
                    </div>
                    <div className={css(Styles.dropDownInnerBox)}>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to={`/manage/userssurveys/${this.props.user.id}`} >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => {
                                this.showNavFn()
                                // console.log('Clicked Your Surveys and Quizzes')
                            }}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faFolderOpen} />
                                <span>Your Surveys and Quizzes</span>
                            </span>
                        </Link>
                        <Link className={css(Styles.dropDownInnerInnerBox, Styles.noLine)} to='/' >
                            <span className={css(Styles.dropDownInnerInnerBox)} onClick={() => {
                                this.props.resetReduxToInitialState();
                                this.props.setCurrentPathname('/')
                                this.showNavFn()
                                // console.log('Clicked Logout')
                            }}>
                                <FontAwesomeIcon className={css(Styles.iconLarge, Styles.iconTablet, Styles.iconLaptop, Styles.iconBiggest)} icon={faEject} />
                                <span>Logout</span>
                            </span>
                        </Link>
                    </div>
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
        surveyAdminsTable: state.surveyAdminsTable,
        pathnameCurrent: state.pathnameCurrent,
    }
}

export default connect(mapStateToProps, { resetReduxToInitialState, setCurrentPathname })(NavMenu);