import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Home } from '@/pages/index';

describe('Home page tests', () => {
  test('Test numbers changing when click button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const numbersElement = screen.getByTestId('numbers');
    const initialNumbers = numbersElement.textContent;

    const buttonElement = screen.getByText('Generate new numbers');
    fireEvent.click(buttonElement);

    const updatedNumbers = numbersElement.textContent;
    expect(updatedNumbers).not.toEqual(initialNumbers);
  });

  test('Render header when withHeader is true', () => {
    render(
      <MemoryRouter>
        <Home withHeader={true} />
      </MemoryRouter>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
