import '@/shared/ui/input/styles.css';

import React, { forwardRef } from 'react';

import { InputProps } from '@/shared/ui/input/Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, register, ...props }, ref) => (
  <div className="inputWrapper">
    {label && <label htmlFor={props.name}>{label}</label>}
    <input ref={ref} {...props} className="input" />
    {error && <p className="error">{error}</p>}
  </div>
));

Input.displayName = 'Input';

export default Input;
