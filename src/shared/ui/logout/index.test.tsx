import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Home, Login } from '@/pages/index';
import { localStorageMockForTest } from '@/shared/utils';

describe('Test Logout component', () => {
  localStorageMockForTest();

  test('Test logout on click', () => {
    const removeItemSpy = jest.spyOn(localStorage, 'removeItem');

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route index path={'/home'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </MemoryRouter>,
    );

    const button = screen.getByTestId('logout');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(removeItemSpy).toBeCalledWith('loginData');
    expect(screen.getByText(/login/i, { selector: 'button' })).toBeInTheDocument();
  });
});
