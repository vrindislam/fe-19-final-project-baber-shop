import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('renders learn react link', () => {
  const { getByText } = render(<TestComponent />);
  const linkElement = getByText(/Ant Design/i);
  expect(linkElement).toBeInTheDocument();
});
