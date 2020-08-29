import React from 'react';
import ReactDOM from 'react-dom';
import CountdownContainer from './components/CountdownContainer';

ReactDOM.render(
  <div>
    <CountdownContainer targetDate="August 27 2020 23:36:00" inactiveMessage="Countdown over" />
  </div>,
  document.getElementById('root')
);