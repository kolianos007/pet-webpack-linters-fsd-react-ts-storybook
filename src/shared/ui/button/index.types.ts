import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'big';
  background?: string;
  margin?: string | number;
  padding?: string | number;
}
