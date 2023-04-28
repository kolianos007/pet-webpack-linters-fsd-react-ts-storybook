import '@/shared/ui/routerLink/styles.css';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RouterLinkProps } from '@/shared/ui/routerLink/index.types';

const RouterLink: FC<RouterLinkProps> = ({ className, children, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);

export default RouterLink;
