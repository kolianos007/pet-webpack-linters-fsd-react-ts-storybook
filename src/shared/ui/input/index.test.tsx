import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Input from '@/shared/ui/input/index';

describe('Test Input component', () => {
  const labelText = 'Test label';
  const errorTest = 'Test error';
  const inputValue = 'Test value';

  test('Renders input with label and error', () => {
    render(<Input name={'test'} label={labelText} error={errorTest} />);

    const inputElement = screen.getByLabelText(labelText);
    const errorElement = screen.getByText(errorTest);

    expect(inputElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });

  test('Render only input', () => {
    render(<Input name={'test'} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    !expect(screen.queryByLabelText(labelText));
    !expect(screen.queryByText(errorTest));
  });

  test('Check input value update', () => {
    render(<Input name={inputValue} />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(inputElement.value).toBe(inputValue);
  });
});
