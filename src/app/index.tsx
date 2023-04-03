import './style.css';

import React from 'react';

import Q from '@/app/colors.svg';
import w from '@/app/qwe.jpg';

const App = () => {
  return (
    <div className={'bg'}>
      {/*<Q />*/}
      <img src={Q} />
      <img src={w} alt="" />
    </div>
  );
};

export default App;
