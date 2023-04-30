import '@/shared/ui/centeredBlock/styles.css';

import React, { FC } from 'react';

import { CenteredBlockProps } from '@/shared/ui/centeredBlock/index.types';

const CenteredBlock: FC<CenteredBlockProps> = ({ children, ...rest }) => {
  return (
    <div className="centered-block" {...rest}>
      {children}
    </div>
  );
};

export default CenteredBlock;
