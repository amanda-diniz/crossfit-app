import { render, screen } from '@testing-library/react'
import { GymnasticForm } from '../../src/components/GymnasticForm'
import '@testing-library/jest-dom'

describe('GymnasticForm', () => {
  it('renders heading and description correctly', () => {
    render(<GymnasticForm />);

    expect(screen.getByRole('heading', { name: /registro de repetições/i })).toBeInTheDocument();
    expect(screen.getByText(/registre suas séries e quantidades de repetições alcançadas/i)).toBeInTheDocument();
  });

  it('renders form fields correctly', () => {
    render(<GymnasticForm />);

    expect(screen.getByLabelText(/exercício/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/repetições/i)).toBeInTheDocument();
  });
});