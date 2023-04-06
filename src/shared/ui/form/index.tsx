import './styles.css';

import React, { FC } from 'react';

import { FormProps } from '@/shared/ui/form/Form.types';

const Form: FC<FormProps> = ({ children, ...props }) => (
  <form {...props} className="form">
    {children}
  </form>
);

export default Form;
