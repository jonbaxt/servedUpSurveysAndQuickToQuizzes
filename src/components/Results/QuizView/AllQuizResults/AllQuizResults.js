import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
// import { Link } from 'react-router-dom';


// import BuildAllResults from './BuildQuizResultsComponents/BuildAllResults';
// import BuildTotalResultChart from './BuildTotalResultChart';
import BuildTotalResultChart from './BuildQuizResultsComponents/BuildTotalResultChart';

import { getQuizResultsInJoinedTable } from '../../../../ducks/reducer';

class AllQuizResults extends Component {
    constructor() {
        super()
        this.state = {
            range: 2
        }
    }
    componentDidMount() {
        if (this.props.quizResultsUltraJoinedTable.length === 0) {
            axios.get('/api/quizresults/joinedtable').then(tableReturned => {
                this.props.getQuizResultsInJoinedTable(tableReturned.data)
            }).catch(err => console.log(err))
        }
    }


    render() {

        return (
            <div className={css(Styles.pageStart)}>
                {/* <br /> */}
                <h2 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Total Quiz Charts</h2>
                <br />
                <BuildTotalResultChart giveTable={this.props.quizResultsUltraJoinedTable} />

            </div>
        )
    }
}

const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const Styles = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    tabletSizeFontMid: {
        '@media (min-width: 490px)': {
            fontSize: '40px'
        }
    },
    smallLaptopSizeFontMid: {
        '@media (min-width: 700px)': {
            fontSize: '60px'
        }
    },
});
let mapStateToProps = (state) => {
    return {
        quizResultsUltraJoinedTable: state.quizResultsUltraJoinedTable
    }
}
export default connect(mapStateToProps, { getQuizResultsInJoinedTable })(AllQuizResults);