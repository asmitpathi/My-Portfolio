import { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";

// Regular imports
import Navbar from "./components/Navbar";
import Footer from "./components/sections/Footer";

// Lazy-loaded components (large files or animations)
const StartCanvas = lazy(() => import("./components/canvas/Stars"));
const Hero = lazy(() => import("./components/sections/Hero"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Suspense fallback={<div>Loading animation...</div>}>
            <StartCanvas />
          </Suspense>
          <div>
            <Suspense fallback={<div>Loading hero section...</div>}>
              <Hero />
            </Suspense>
            <Wrapper>
              <Suspense fallback={<div>Loading skills & experience...</div>}>
                <Skills />
                <Experience />
              </Suspense>
            </Wrapper>
            <Suspense fallback={<div>Loading projects...</div>}>
              <Projects />
            </Suspense>
            <Wrapper>
              <Suspense fallback={<div>Loading education & contact...</div>}>
                <Education />
                <Contact />
              </Suspense>
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
