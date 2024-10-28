import "../styles/globals/globals.css";
import "../styles/globals/fonts.css";
import "../styles/globals/themes.css";
import { ThemeProvider } from '../context/wrappers/ThemeSwitcher';
import { ContextProvider } from "@/context/wrappers/ContextProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "./template";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body>
        <Template>
          <ContextProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ContextProvider>
        </Template>
      </body>
    </html>
  );
}
