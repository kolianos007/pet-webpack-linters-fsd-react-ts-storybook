import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from '@/app/index';
import { Login } from '@/pages/index';
import { localStorageMockForTest } from '@/shared/utils';

describe('Router testing', () => {
  localStorageMockForTest();

  test('Render Outlet when authenticated', () => {
    localStorage.setItem('loginData', JSON.stringify({ username: 'test' }));

    render(<App />);
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  test('Render Login when page unauthenticated', () => {
    localStorage.removeItem('loginData');

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  test('Render page without localStorageData', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    screen.debug();
    expect(screen.getByRole('button')).toHaveTextContent(/login/i);
  });
});
