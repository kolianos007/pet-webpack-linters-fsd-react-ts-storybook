import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '@/app/index';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText('Login');
  expect(linkElement).toBeInTheDocument();
});
