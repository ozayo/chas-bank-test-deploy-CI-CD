import React from 'react';
import { render, screen } from '@testing-library/react';
import MainCards from '../components/MainCards.js';

describe('MainCards component', () => {
  it('renders two cards with correct content', () => {
    render(<MainCards />);

    // Kartlarda bulunan başlıkları kontrol edin
    const headers = screen.getAllByText('Some header');
    expect(headers.length).toBe(2);

    // Kartlarda bulunan paragrafları kontrol edin
    const paragraphs = screen.getAllByText(/Some quick example text to build on the card title and make up the bulk of the card's content./i);
    expect(paragraphs.length).toBe(2);

    // Image bileşenlerinin alt metinlerini kontrol edin
    expect(screen.getByAltText('image one')).toBeInTheDocument();
    expect(screen.getByAltText('image two')).toBeInTheDocument();
  });
});
