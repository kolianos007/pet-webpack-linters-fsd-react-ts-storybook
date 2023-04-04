import './styles.css';

import React, { FC } from 'react';

import { ButtonProps } from '@/shared/ui/button/Button.types';

const Button: FC<ButtonProps> = ({
  children,
  color,
  variant = 'contained',
  size,
  margin,
  background,
  padding,
  ...props
}) => {
  const rootClasses = ['my-btn'];

  if (variant) rootClasses.push(`btn-${variant}`);
  if (size) rootClasses.push(`btn-${size}`);

  return (
    <button
      {...props}
      className={rootClasses.join(' ')}
      style={{ color, margin, background, padding, borderColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
