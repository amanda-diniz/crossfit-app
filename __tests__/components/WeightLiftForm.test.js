import { render, screen } from '@testing-library/react'
import { WeightLiftForm } from '../../src/components/WeightLiftForm'
import '@testing-library/jest-dom'

describe('WeightLiftForm', () => {
  it('renders heading and description correctly', () => {
    render(<WeightLiftForm />);

    expect(screen.getByRole('heading', { name: /Registro de PR/i })).toBeInTheDocument();
    expect(screen.getByText(/Seu registro de PR ajudará a celebrar suas realizações e a se desafiar a alcançar novos patamares./i)).toBeInTheDocument();
  });

  it('renders form fields correctly', () => {
    render(<WeightLiftForm />);

    expect(screen.getByLabelText(/exercício/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/peso/i)).toBeInTheDocument();
  });
});