import { userEvent } from '@storybook/testing-library';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { localStorageMockForTest } from '../../shared/utils';
import { Home, Login, Registration } from '../index';

describe('Login Page render', () => {
  test('Displays an error message for invalid credentials', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Login />
      </MemoryRouter>,
    );
    const usernameInput = screen.getByLabelText('Login:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByText('Login');

    await userEvent.type(usernameInput, 'invalidUser');
    await userEvent.type(passwordInput, 'invalidPassword');
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorLogin = screen.getByText('No user with this name and password');
      expect(errorLogin).toBeInTheDocument();
    });
  });

  test('Navigate to Registration page when click "Go to Registration" link', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </MemoryRouter>,
    );

    const registrationLink = screen.getByText('Go to Registration');
    fireEvent.click(registrationLink);
    const registrPage = await screen.getByText('Go to Login');
    expect(registrPage).toBeInTheDocument();
  });

  test('Redirect to home page after successful login', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Login />
        <Home />
      </MemoryRouter>,
    );
    const usernameInput = screen.getByLabelText('Login:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByText('Login');

    localStorageMockForTest();
    const registrationData = {
      username: 'testUser',
      password: 'testPass',
    };

    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    await userEvent.type(usernameInput, 'testUser');
    await userEvent.type(passwordInput, 'testPassword');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });
  });
});
