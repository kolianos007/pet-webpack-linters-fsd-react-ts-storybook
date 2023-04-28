import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '@/shared/ui/button/index';

describe('Button component', () => {
  test('Render btn with provided text and handle click event', () => {
    const buttonText = 'Click me';
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toBeCalledTimes(1);
  });

  test('Applies correct CSS classes based on props', () => {
    const buttonText = 'Styled button';
    const customClassName = 'custom-class';
    const size = 'big';
    const variant = 'outlined';

    render(
      <Button className={customClassName} size={size} variant={variant}>
        {buttonText}
      </Button>,
    );

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toHaveClass('my-btn', customClassName, `btn-${size}`, `btn-${variant}`);
  });
});
