import React from 'react';
import PropTypes from 'prop-types';

const OperatorBtn = ({ o,onClick }) => (
    <button onClick={ onClick }>{o}</button>
  );
  
  OperatorBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  export default OperatorBtn;