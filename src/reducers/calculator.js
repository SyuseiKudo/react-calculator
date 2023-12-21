import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    // 押されたボタンの値
    inputValue: 0, 
    // 合計値
    resultValue: 0,
    // 計算結果を表示するか否か
    showingResult: false,
  };

  const calculator = (state = initialAppState,action)=> {
    if(action.type === actionTypes.INPUT_NUMBER){
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
        };
    }else if (action.type === actionTypes.PLUS) {
        return {
          ...state,
          inputValue: 0,
          //現時点の合計値 + 数字ボタンの値
          resultValue: state.resultValue + state.inputValue,
          //表示する
          showingResult: true,
        };
    } else {
        return state;
    }
  };

export default calculator;