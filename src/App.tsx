import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { TechStack } from "./components/portfolio/TechStack";
import { Projects } from "./components/portfolio/Projects";
import { Experience } from "./components/portfolio/Experience";
import { GitHubSection } from "./components/portfolio/GitHubSection";
import { Education } from "./components/portfolio/Education";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { BackToTop } from "./components/portfolio/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-dvh dark">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <GitHubSection />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
