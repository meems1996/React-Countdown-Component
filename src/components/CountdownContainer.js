import React, { useEffect } from 'react';
import Countdown from './Countdown';
import PropTypes from 'prop-types';
import './CountdownContainer.css';

const CountdownContainer = ({ targetDate, inactiveMessage }) => {
  const [countdown, setCountdown] = React.useState(() => getRemainingTime());
  const [active, setActive] = React.useState(() => {
    return countdown.milliseconds > 0;
  });

  // let active = true;

  useEffect(() => {
    const hasRemainingTime = () => {
      const { milliseconds } = getRemainingTime();
      return milliseconds > 0;
    };

    if (!hasRemainingTime()) {
      setActive(false);
      // active = false;
      return;
    }

    const interval = setInterval(() => {
      const {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      } = getRemainingTime();

      if (milliseconds < 0) {
        setActive(false);
        // active = false;
        clearInterval(interval);
      } else {
        setCountdown({ days, hours, minutes, seconds, milliseconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [getRemainingTime]);

  function getRemainingTime() {
    const countDownDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const milliseconds = countDownDate - now;

    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, milliseconds };
  }

  return (
    <div className="container">
      {active === true ? (
        <div className="countdownContainer">
          <Countdown countdown={countdown} />
        </div>
      ) : (
        <div className="countdownContainer">
          <p className="inactiveMessage">{inactiveMessage}</p>
        </div>
      )}
    </div>
  );
};

CountdownContainer.propTypes = {
  targetDate: PropTypes.string,
  inactiveMessage: PropTypes.string,
};

export default CountdownContainer;
