import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { localStorageMockForTest } from '@/shared/utils';
import Header from '@/widgets/header/index';

describe('Header Component', () => {
  localStorageMockForTest();
  test('Test renders with username', () => {
    const userName = 'Jack Rasel';

    localStorage.setItem('loginData', JSON.stringify({ username: userName }));

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByText(userName)).toBeInTheDocument();
  });

  test('Applies the specified variant and background color', () => {
    const variant = 'static';
    const background = 'red';

    const { container } = render(
      <MemoryRouter>
        <Header variant={variant} background={background} />
      </MemoryRouter>,
    );

    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass(`header-${variant}`);
    expect(headerElement).toHaveStyle({ background: background });
  });
});
