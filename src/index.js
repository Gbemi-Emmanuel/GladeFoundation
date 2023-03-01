import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Resources from './components/Resources';
import Footer from './components/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <HeroSection />
  <About />
  <Impact />
  <GetInvolved />
  <Resources />
  <Footer />
  </>
);

 