import ServicesInventiaExperienceProductDesign from '@/app/services/inventiaexperience-productdesign/page';
import ServicesInventiaExperienceResearch from '@/app/services/inventiaexperience-research/page';
import ServicesInventiaExperienceServiceDesign from '@/app/services/inventiaexperience-servicedesign/page';
import ServicesInventiaSoftwareCloudEngineering from '@/app/services/inventiasoftware-cloudengineering/page';
import ServicesInventiaSoftwareDevopsImplementation from '@/app/services/inventiasoftware-devopsimplementation/page';
import ServicesInventiaSoftwareFullstackDevelopment from '@/app/services/inventiasoftware-fullstackdevelopment/page';
import Services from '@/app/services/page';
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

describe('Services Page', () => {
  it('renders Services page correctly', () => {
    render(
      <Wrapper>
        <Services />
      </Wrapper>
    );
    expect(screen.getByText(/Cómo te ayudamos/i)).toBeInTheDocument();
  });

  it('renders Product Design and Build section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaExperienceProductDesign />
      </Wrapper>
    );
    expect(screen.getByText(/Product Design and Build/i)).toBeInTheDocument();
  });

  it('renders Custom Research section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaExperienceResearch />
      </Wrapper>
    );
    expect(screen.getByText(/Teniendo como/i)).toBeInTheDocument();
  });

  it('renders Service Design section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaExperienceServiceDesign />
      </Wrapper>
    );
    expect(screen.getByText(/Service Design/i)).toBeInTheDocument();
  });

  it('renders Cloud Engineering section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaSoftwareCloudEngineering />
      </Wrapper>
    );
    expect(screen.getByText(/Propone un acercamiento sistemático/i)).toBeInTheDocument();
  });

  it('renders DevOps Implementation section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaSoftwareDevopsImplementation />
      </Wrapper>
    );
    expect(screen.getByText(/Devops Implementation/i)).toBeInTheDocument();
  });

  it('renders Full Stack Development section correctly', () => {
    render(
      <Wrapper>
        <ServicesInventiaSoftwareFullstackDevelopment />
      </Wrapper>
    );
    expect(screen.getByText(/Full Stack Development/i)).toBeInTheDocument();
  });
});
