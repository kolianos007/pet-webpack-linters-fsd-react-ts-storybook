import '@/shared/ui/centeredBlock/styles.css';

import React, { FC } from 'react';

import { CenteredBlockProps } from '@/shared/ui/centeredBlock/CenteredBlock.types';

const CenteredBlock: FC<CenteredBlockProps> = ({ children }) => {
  return <div className="centered-block">{children}</div>;
};

export default CenteredBlock;
