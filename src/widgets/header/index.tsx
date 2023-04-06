import './styles.css';

import React, { FC } from 'react';

import Button from '@/shared/ui/button';
import { HeaderProps } from '@/widgets/header/Header.types';

const Header: FC<HeaderProps> = ({ variant = 'static', logo, ...props }) => {
  const rootClasses = ['header'];

  if (variant) rootClasses.push(`header-${variant}`);

  return (
    <header {...props} className={rootClasses.join(' ')}>
      <img src={logo} className="logo" />
      <Button variant="contained" size="medium">
        Login
      </Button>
    </header>
  );
};

export default Header;
