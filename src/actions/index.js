import * as actionTypes from '../utils/actionTypes';


// 電卓の数字ボタンを押したとき使うAction
export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
  });


// plusボタンをクリックしたときに使うAction
export const onPlusClick = () => ({
    type: actionTypes.PLUS,
});