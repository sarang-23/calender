import { render, screen } from '@testing-library/react';
import App from './App';
import { DAYS, MONTHS } from './helper/constants';

test('On load, controller shows expected values', () => {
  render(<App />);
  const dt = new Date();
  const month = dt.getMonth();
  let monthText = MONTHS[month];
  let year = dt.getFullYear();
  const today = screen.getByText('Today');
  const currentMonth = screen.getByText(monthText + " " + year);

  expect(today).toBeInTheDocument();
  expect(currentMonth).toBeInTheDocument();
});
