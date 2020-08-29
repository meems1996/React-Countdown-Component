import React from 'react';
import './CountdownContainer.css';
import PropTypes from 'prop-types';

const CountdownUnit = ({ value, label }) => {
  return (
    <div className="countdownUnit">
      <span className="colons">{value}</span>
      <p>{label}</p>
    </div>
  );
};

CountdownUnit.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

export default CountdownUnit;
