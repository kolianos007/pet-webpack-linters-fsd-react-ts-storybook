import './styles.css';

import React, { FC } from 'react';

import { ButtonProps } from '@/shared/ui/button/Button.types';

const Button: FC<ButtonProps> = ({ children, color, big, ...props }) => {
  const rootClasses = ['my-button'];

  if (big) rootClasses.push('big-btn');

  return (
    <button {...props} className={rootClasses.join(' ')} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
