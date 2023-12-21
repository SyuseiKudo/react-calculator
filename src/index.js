import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reducer from './reducers'
import CalculatorContainer from './containers/CalculatorContainer';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <CalculatorContainer />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
