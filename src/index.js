import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GetInvolved from './components/GetInvolved';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <HeroSection />
  <GetInvolved />
  <Footer />
  </>
);

 