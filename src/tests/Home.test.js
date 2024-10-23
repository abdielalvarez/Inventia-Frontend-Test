import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders all the sections correctly', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Transform/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/Explanation/i)).toBeInTheDocument();
    expect(screen.getByText(/Specialize/i)).toBeInTheDocument();
    expect(screen.getByText(/Trust/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    // expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument(); // Para ContactUsForm
  });
});
