import React, { useState } from 'react';

import TimeLeftBox from './TimeLeftBox';
import { calculateTimeLeft, formatFloat } from './utils';
import './styles.scss';

const App = () => {
  const [age, setAge] = useState('');
  const [daysLeft, setDaysLeft] = useState('');
  const [weeksLeft, setWeeksLeft] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    const age = isNaN(value) ? 0 : parseInt(value, 10);
    const timeLeft = calculateTimeLeft(age);
    setAge(age);
    setDaysLeft(timeLeft.daysLeft);
    setWeeksLeft(timeLeft.weeksLeft);
  };

  const renderBoxes = amount => {
    const boxes = [];

    for (let index = 0; index < amount; index++) {
      const day = index + 1;
      boxes.push(<TimeLeftBox key={day} content={day} />);
    }

    return boxes;
  };

  const ageInput = isNaN(age) ? '' : age;

  return (
    <div className="container">
      <h1>Welcome to Webpack Lab!</h1>
      <p>How old are you?</p>
      <input type="text" value={ageInput} onChange={handleOnChange} autoFocus />

      {daysLeft !== null && daysLeft !== '' && daysLeft > 0 && (
        <p>
          You have about <b>{formatFloat(weeksLeft)} weeks</b> and{' '}
          <b>{daysLeft} days</b> left. Enjoy!
        </p>
      )}

      {ageInput !== '' &&
        daysLeft <= 0 &&
        daysLeft !== null &&
        daysLeft !== '' && <p>Are you really that old?</p>}

      <div className="time-boxes">
        {weeksLeft > 0 && renderBoxes(weeksLeft)}
      </div>
    </div>
  );
};

export default App;
