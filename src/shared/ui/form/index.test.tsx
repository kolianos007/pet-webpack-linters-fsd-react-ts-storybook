import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Form from '@/shared/ui/form/index';

test('Handles submit event', () => {
  const handleSubmit = jest.fn();

  render(
    <Form onSubmit={handleSubmit} data-testid="form">
      <button type="submit">Submit</button>
    </Form>,
  );

  fireEvent.submit(screen.getByTestId('form'));
  expect(handleSubmit).toHaveBeenCalled();
});
