import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MainPage from './MainPage';

describe('MainPage', () => {
    it('renders crafting experiences text', () => {
        render(<MainPage />);
        expect(screen.getByText(/CRAFTING/i)).toBeInTheDocument();
        expect(screen.getByText(/EXPERIENCES/i)).toBeInTheDocument();
    });

    it('contains view projects button', () => {
        render(<MainPage />);
        const button = screen.getByRole('button', { name: /view projects/i });
        expect(button).toBeInTheDocument();
    });
});
