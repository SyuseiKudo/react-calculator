import * as actionTypes from '../utils/actionTypes';

//Storeが管理するstateの初期値を定義
const initialAppState = {
    // 押されたボタンの値
    inputValue: 0, 
    // 合計値
    resultValue: 0,
    //演算子の保存
    stockOption: '',
    //演算判定
    calculate: false,
    // 計算結果を表示するか否か
    showingResult: false,
  };

  //Reducerの関数
  const calculator = (state = initialAppState,action)=> {
    if(action.type === actionTypes.INPUT_NUMBER){
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
        };
    }else if (action.type === actionTypes.PLUS) {
        if(state.calculate === true){
            return {
                ...state,
                inputValue: 0,
                operator: '+',
                //現時点の合計値 + 数字ボタンの値
                resultValue: state.inputValue + state.resultValue ,
                //表示する
                showingResult: true,
              };
        }else{
            return {
                ...state,
                inputValue: 0,
                operator: '+',
                calcurate:true,
                //現時点の合計値 + 数字ボタンの値
                resultValue: state.inputValue,
                //表示する
                showingResult: true,
              };
        }
    }else if (action.type === actionTypes.MINUS) {
        if (state.calculate === true) {
            return {
              ...state,
              inputValue: 0,
              operator: '-',
              resultValue: state.resultValue - state.inputValue,
              showingResult: true,
            };
          } else {
            return {
              ...state,
              inputValue: 0,
              operator: '-',
              calculate: true,
              resultValue: state.inputValue,
              showingResult: true,
            };
          }
    } else if (action.type === actionTypes.EQUAL) {
            switch(state.operator){
                case '+':
                    return{
                        inputValue: state.resultValue + state.inputValue,
                        operator: '',
                        calculate: false,
                        resultValue: state.resultValue + state.inputValue,
                        showingResult: true,
                    };
                case '-':
                    return {
                        inputValue: state.resultValue - state.inputValue,
                        operator: '',
                        calculate: false,
                        resultValue: state.resultValue - state.inputValue,
                        showingResult: true, 
                    };
                default:
                    return state;
            }
    } else if(action.type === actionTypes.CLEAR) {
      return {
        inputValue: 0,
        operator: '',
        calculate: false,
        resultValue: 0,
        showingResult: false,
      };
    } else {
        return state;
    }
  };

export default calculator;