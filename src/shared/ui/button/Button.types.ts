import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  color?: string;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'big';
  background?: string;
  margin?: string | number;
  padding?: string | number;
}
