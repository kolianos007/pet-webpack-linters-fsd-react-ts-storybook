import '@/widgets/header/styles.css';

import React, { FC } from 'react';

import Logout from '@/shared/ui/logout';
import { HeaderProps } from '@/widgets/header/index.types';

const Header: FC<HeaderProps> = ({ variant = 'static', logo, background, ...props }) => {
  const loginData = localStorage.getItem('loginData');
  const userName = loginData ? JSON.parse(loginData).username : null;
  const rootClasses = ['header'];

  if (variant) rootClasses.push(`header-${variant}`);

  return (
    <header {...props} className={rootClasses.join(' ')} style={{ background }}>
      <img src={logo} className="logo" />
      <div className="right-block">
        <span className="username">{userName}</span>
        <Logout />
      </div>
    </header>
  );
};

export default Header;
