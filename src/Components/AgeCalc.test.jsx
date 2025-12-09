import {render, screen, fireEvent} from '@testing-library/react';
import AgeCalc from './AgeCalc';

test('renders AgeCalc component', () => {
  render(<AgeCalc />);
  const birthInput = screen.getByLabelText(/Birthday/i);
    const todayInput = screen.getByLabelText(/Today/i);
    expect(birthInput).toBeInTheDocument();
    expect(todayInput).toBeInTheDocument();
});

// test('calculates age correctly', () => {
//   render(<AgeCalc />);
//   const birthInput = screen.getByLabelText(/Birthday/i);
//     const todayInput = screen.getByLabelText(/Today/i);
//     const result = screen.getByRole('heading', { level: 3 });
//     fireEvent.change(birthInput, { target: { value: '1990-01-01' } });
//     fireEvent.change(todayInput, { target: { value: '2020-01-01' } });
//     expect(result).toHaveTextContent('30 Years 0 Months 0 Days');
// });

// test('displays birthday message on birthday', () => {
//   render(<AgeCalc />);
//   const birthInput = screen.getByLabelText(/Birthday/i);
//     const todayInput = screen.getByLabelText(/Today/i);
//     const result = screen.getByRole('heading', { level: 3 });
//     fireEvent.change(birthInput, { target: { value: '2000-05-15' } });
//     fireEvent.change(todayInput, { target: { value: '2023-05-15' } });
//     expect(result).toHaveTextContent("Happy Birthday! 🎉 You're 23 years old!");
// });