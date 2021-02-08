import React from 'react';
import { render, screen } from '@testing-library/react';
import RatesList from './RatesList';

test('renders learn react link', () => {
  render(<RatesList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
