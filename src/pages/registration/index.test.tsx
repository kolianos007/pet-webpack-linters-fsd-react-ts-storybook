import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Registration } from '@/pages/index';
import { localStorageMockForTest } from '@/shared/utils';

describe('Test registration page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/registration']}>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<div>Login page</div>} />
          <Route path="/" element={<div>Homepage</div>} />
        </Routes>
      </MemoryRouter>,
    );
  });

  test('Test successful registration and redirect', async () => {
    const testData = { username: 'testUsername', password: 'testPassword' };
    localStorageMockForTest();
    const usernameInput = screen.getByLabelText('Login:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByText('Register');

    fireEvent.change(usernameInput, { target: { value: 'testUsername' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const registrationData = JSON.parse(localStorage.getItem('registrationData') || '{}');
      const loginData = JSON.parse(localStorage.getItem('loginData') || '{}');

      expect(registrationData).toEqual(testData);
      expect(loginData).toEqual(testData);
    });
  });

  test('Test navigate to login when clicking Go to Login', async () => {
    const loginLink = screen.getByText('Go to Login');
    fireEvent.click(loginLink);

    const loginPage = await screen.findByText('Login page');
    expect(loginPage).toBeInTheDocument();
  });
});
