import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './styles/sections.css';

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
