import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class QuesCreate extends Component {
    constructor(){
        super()
        this.state = {
            currentQuizId: 6,
            
        }
    }
    render(){
        console.log('Question Number: ', this.props.qNum);
        return(<div>
             <h1>Question # {this.props.qNum}</h1>
            {/*
            <h1 className={css(st.texCen, st.h1Normal, st.h1Tablet, st.h1Laptop, st.h1Biggest)} >Question Type</h1><br /><br />
                    
                    <div>
                    <button>
                    Multiple Choice    
                    </button>
                    <button>
                    Text Write In
                    </button>
                    <button>
                    1 to 10 Responses
                    </button>
                    <button>
                    Picture Guessing
                    </button>
                    </div> */}
        </div>)
    }
}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const translateKeyframes = {
    '0%': {
        transform: 'translateX(0px)',
    },

    '50%': {
        transform: 'translateX(50px)',
    },

    '100%': {
        transform: 'translateX(100px)',
    },
};
const loopableOpacityKeyframes = { '0%': { opacity: 0 }, '50%': { opacity: 1 }, '100%': { opacity: 0 } }
const st = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    transAnimation: {
        animationName: translateKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease',
        animationIterationCount: 'initial'
    },
    trans: {
        transition: '1s all ease',
        fontSize: '150px'
    },
    fl: {
        display: 'flex'
    },
    jConCen: {
        justifyContent: 'center'
    },
    spA: {
        justifyContent: 'space-around',
    },
    spB: {
        justifyContent: 'space-between',
    },
    texCen: {
        textAlign: 'center'
    },
    marCen: {
        margin: '0 auto',
    },
    marTop: {
        marginTop: '15px'
    },
    boxW: {
        width: '300px',
        background: '#3300CC',
        transition: '1s all ease',
        borderRadius: '1%',
    },
    boxWTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            width: '450px',
        }
    },
    boxWLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            width: '650px',
        }
    },
    boxWBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            width: '900px',
        }
    },
    borderShadow: {
        boxShadow: '5px 10px 8px #330099'
    },
    inputBoxStyled: {
        marginLeft: '5px',
        fontFamily: 'Oswald, sans-serif',
        border: 'none',
        fontSize: '18px',
        width: '290px',
        background: 'rgba(0, 204, 255, 0.6)',
        transition: '1s all ease',
        color: 'white',
        '::placeholder': {
            color: 'white'
        },
    },
    inputBoxStyledTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px',
            width: '440px'
        }
    },
    inputBoxStyledLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px',
            width: '640px'
        }
    },
    inputBoxStyledBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px',
            width: '880px'
        }
    },
    textAreaBoxStyled: {
        marginLeft: '5px',
        width: '290px',
        border: 'none',
        fontFamily: 'Oswald, sans-serif',
        transition: '1s all ease',
        fontSize: '18px',
        background: 'rgba(0, 204, 255, 0.6)',
        color: 'white',
        '::placeholder': {
            color: 'white',
            animationName: loopableOpacityKeyframes,
            animationDuration: '1s',
            animationTimingFunction: 'ease',
            animationIterationCount: 'infinite'
        },
    },
    textAreaBoxStyledTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px',
            width: '440px'
        }
    },
    textAreaBoxStyledLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px',
            width: '640px'
        }
    },
    textAreaBoxStyledBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px',
            width: '880px'
        }
    },
    picResize: {
        width: '100%',
        transition: '1s all ease',
    },
    fontResizePicArea: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        transition: '1s all ease',
    },
    fontResize: {
        transition: '1s all ease',
        fontSize: '150px',
    },
    fontResizeTablet: {
        '@media (min-width: 490px)': {
            fontSize: '240px',
            transition: '1s all ease',
        }
    },
    fontResizeLaptop: {
        '@media (min-width: 700px)': {
            fontSize: '320px',
            transition: '1s all ease',
        }
    },
    fontResizeBiggest: {
        '@media (min-width: 1400px)': {
            fontSize: '500px',
            transition: '1s all ease',
        }
    },
    shadow: {
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.8)',
    },
    yesNoButtons: {
        width: '80px',
        height: '40px',
        background: 'rgba(0, 204, 255, 0.6)',
        border: 'none',
        borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    yesNoHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
            transition: '1s all ease',
        },
    },
    createButton: {
        width: '140px',
        height: '40px',
        background: 'rgba(0, 204, 255, 0.6)',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '5%',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    h1Normal: {
        transition: '1s all ease',
        fontSize: '40px'
    },
    h1Tablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '50px'
        }
    },
    h1Laptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '60px'
        }
    },
    h1Biggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '70px'
        }
    },
    h3Normal: {
        transition: '1s all ease',
        fontSize: '20px'
    },
    h3Tablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '30px'
        }
    },
    h3Laptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '40px'
        }
    },
    h3Biggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '50px'
        }
    },
    pNormal: {
        transition: '1s all ease',
        fontSize: '18px'
    },
    pTablet: {
        '@media (min-width: 490px)': {
            transition: '1s all ease',
            fontSize: '23px'
        }
    },
    pLaptop: {
        '@media (min-width: 700px)': {
            transition: '1s all ease',
            fontSize: '28px'
        }
    },
    pBiggest: {
        '@media (min-width: 1400px)': {
            transition: '1s all ease',
            fontSize: '33px'
        }
    }

})
export default QuesCreate;