import { render, screen } from '@testing-library/react';
import React from 'react';

import CenteredBlock from '@/shared/ui/centeredBlock/index';

test('Render centered block with children', () => {
  const childrenText = 'Centered Block';
  render(
    <CenteredBlock>
      <p>{childrenText}</p>
    </CenteredBlock>,
  );

  expect(screen.getByText(childrenText)).toBeInTheDocument();
});
