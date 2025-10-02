import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Header/i);
  expect(headerElement).toBeInTheDocument();
});