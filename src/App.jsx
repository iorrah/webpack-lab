import React from 'react';

import Header from './Header';
import TimeLeft from './TimeLeft';
import './styles.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <TimeLeft />
    </div>
  );
};

export default App;
