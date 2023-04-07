import React, { FC } from 'react';
import { CenteredBlockProps } from '@/shared/ui/centeredBlock/CenteredBlock.types';
import './styles.css';

const CenteredBlock: FC<CenteredBlockProps> = ({ children }) => {
  return <div className="centered-block">{children}</div>;
};

export default CenteredBlock;
