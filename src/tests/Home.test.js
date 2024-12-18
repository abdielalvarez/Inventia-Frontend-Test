import Home from '@/app/page';
import { ContextProvider } from '@/context/wrappers/ContextProvider';
import { ThemeProvider } from '@/context/wrappers/ThemeSwitcher';
import { render, screen } from '@testing-library/react';

global.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}

  unobserve() {}

  disconnect() {}
};

global.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  removeListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('Home Page', () => {
  it('renders all the sections correctly', () => {
    render(
      <ContextProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </ContextProvider>
    );

    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
  });
});
