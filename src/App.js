import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// UX/UI in figma: https://www.figma.com/file/PSmJmKeLF9AH9mTq69obwQ/Figma-startup-landing-page-dark-(Community)?node-id=0%3A3519