import SuccessStoriesBBVA from '@/app/success-stories/bbva/page';
import SuccessStoriesFinancieraPodemosProgresar from '@/app/success-stories/financierapodemosprogresar/page';
import SuccessStoriesGentera from '@/app/success-stories/gentera/page';
import SuccessStoriesION from '@/app/success-stories/ion/page';
import SuccessStories from '@/app/success-stories/page';
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

const Wrapper = ({ children }) => {
  return (
    <ContextProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ContextProvider>
  );
};

describe('Success Stories Page', () => {
  it('renders success stories page correctly', () => {
    render(
      <Wrapper>
        <SuccessStories />
      </Wrapper>
    );
    expect(screen.getByText(/Casos de éxito/i)).toBeInTheDocument();
  });

  it('renders success stories BBVA page correctly', () => {
    render(
      <Wrapper>
        <SuccessStoriesBBVA />
      </Wrapper>
    );
    expect(screen.getByText(/otros casos de éxito/i)).toBeInTheDocument();
  });

  it('renders success stories Gentera page correctly', () => {
    render(
      <Wrapper>
        <SuccessStoriesGentera />
      </Wrapper>
    );
    expect(screen.getByText(/otros casos de éxito/i)).toBeInTheDocument();
  });

  it('renders success stories ION page correctly', () => {
    render(
      <Wrapper>
        <SuccessStoriesION />
      </Wrapper>
    );
    expect(screen.getByText(/otros casos de éxito/i)).toBeInTheDocument();
  });

  it('renders success stories Podemos progresar page correctly', () => {
    render(
      <Wrapper>
        <SuccessStoriesFinancieraPodemosProgresar />
      </Wrapper>
    );
    expect(screen.getByText(/otros casos de éxito/i)).toBeInTheDocument();
  });
});
