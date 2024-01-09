import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import '../CalculatorContainer.css'
import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import OperatorBtn from '../components/OperatorBtn';
import Result from '../components/Result';


class CalculatorContainer extends Component {
    render(){
        //this.prop:indexjsから渡されたstoreの値が記載
        const { calculator, actions } = this.props;
        return (
            <React.Fragment>
            <div className='result'>
                <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
            </div>
             <div className='wrapper'>
                <div className='number'>
                    <div className = 'numUpper'>
                        <NumBtn n={1} onClick = {() => actions.onNumClick(1)}/>
                        <NumBtn n={2} onClick = {() => actions.onNumClick(2)}/>
                        <NumBtn n={3} onClick = {() => actions.onNumClick(3)}/>
                    </div>
                    <div className='numMiddle'>
                        <NumBtn n={4} onClick = {() => actions.onNumClick(4)}/>
                        <NumBtn n={5} onClick = {() => actions.onNumClick(5)}/>
                        <NumBtn n={6} onClick = {() => actions.onNumClick(6)}/>
                    </div>
                    <div className='numLower'>
                        <NumBtn n={7} onClick = {() => actions.onNumClick(7)}/>
                        <NumBtn n={8} onClick = {() => actions.onNumClick(8)}/>
                        <NumBtn n={9} onClick = {() => actions.onNumClick(9)}/>
                    </div>
                    <div className='zero'>
                        <NumBtn n={0} onClick = {() => actions.onNumClick(0)}/>   
                        <span className="allClear">
                            <OperatorBtn o={'AC'} onClick={() => actions.onClearClick()} />
                        </span>  
                        <span>
                            <OperatorBtn o={'='} onClick={() => actions.onEqualClick()} /> 
                        </span>          
                    </div>
                </div>
                <div className="operator">
                    <OperatorBtn o={'-'} onClick={() => actions.onMinusClick()} />
                    <OperatorBtn o={'+'} onClick={() => actions.onPlusClick()} />
                    <OperatorBtn o={'×'} onClick={() => actions.onMultiplyClick()} />
                    <OperatorBtn o={'÷'} onClick={() => actions.onDivideClick()} />
                </div>
            </div>
            </React.Fragment>
        );
    }
}
//
const mapState = (state,ownProps) => ({
    calculator: state.calculator,
});

function mapDispatch(dispatch){
    return{
        actions: bindActionCreators(actions,dispatch),
    };
}

export default connect(mapState,mapDispatch)(CalculatorContainer);