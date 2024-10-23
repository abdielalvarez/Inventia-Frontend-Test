import AboutUs from '@/app/about-us/page';
import { ContextProvider } from '@/context/wrappers/ContextProvider';
import { ThemeProvider } from '@/context/wrappers/ThemeSwitcher';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

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

const Wrapper = ({ children }) => {
  return (
    <ContextProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ContextProvider>
  );
};

describe('About Us Page', () => {
  beforeEach(() => {
    render(
      <Wrapper>
        <AboutUs />
      </Wrapper>
    );
  });

  it('renders about us page correctly', () => {
    expect(screen.getByText(/¡Enviar!/i)).toBeInTheDocument();
  });
});