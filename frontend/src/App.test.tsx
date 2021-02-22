import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link', () => {
  render(<App />);
  const listLint = screen.getByText(/Rates List/i);
  const createList = screen.getByText(/Create Rate/i);
  expect(listLint).toBeInTheDocument();
  expect(createList).toBeInTheDocument();
});
