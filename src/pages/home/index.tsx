import '@/pages/home/styles.css';

import React, { FC, useState } from 'react';

import { HomeProps } from '@/pages/home/Home.types';
import Logo from '@/shared/assets/logo.png';
import Button from '@/shared/ui/button';
import { getRandomNumber } from '@/shared/utils';
import Header from '@/widgets/header';

const Home: FC<HomeProps> = ({ withHeader = true }) => {
  const [number1, setNumber1] = useState(getRandomNumber());
  const [number2, setNumber2] = useState(getRandomNumber());

  const handleButtonClick = () => {
    setNumber1(getRandomNumber());
    setNumber2(getRandomNumber());
  };

  return (
    <>
      {withHeader && <Header variant="static" logo={Logo} />}
      <div className="container">
        <div className="wrapper">
          <div className="numbers">
            {number1} + {number2} = {number1 + number2}
          </div>
          <Button onClick={handleButtonClick}>Generate new numbers</Button>
        </div>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a
          reader will be distracted by the readable content of a page when looking at its layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop publishing packages and web page editors now
          use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still
          in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>
    </>
  );
};

export default Home;
