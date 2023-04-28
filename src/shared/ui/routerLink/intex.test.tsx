import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import RouterLink from '@/shared/ui/routerLink/index';

describe('Test RouterLink component', () => {
  test('renders link with correct text and navigates to the expected route', async () => {
    const testRoutePath = '/test';
    const testText = 'Test Link';

    render(
      <MemoryRouter initialEntries={['/']}>
        <RouterLink to={testRoutePath}>{testText}</RouterLink>
        <Routes>
          <Route index element={<></>} />
          <Route path={testRoutePath} element={<div>Test Route Content</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const linkElement = screen.getByText(testText);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
    await waitFor(() => {
      const testRouteContent = screen.getByText('Test Route Content');
      expect(testRouteContent).toBeInTheDocument();
    });
  });
});
