import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from "../components/Footer.js";

describe('Footer component', () => {
  it('renders the correct text', () => {
    render(<Footer />);
    expect(screen.getByText(/Chas Bank Web/i)).toBeInTheDocument();
    expect(screen.getByText(/© \d{4} All Rights Reserved/i)).toBeInTheDocument();
  });
});
