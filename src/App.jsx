import './App.css';
import Navbar from './components/navbar/navbar';
import Section1 from './components/home/section-1';
import IconHome from './components/home/icon';
import Section2 from './components/home/section-2';
import Section3 from './components/home/section-3';
import Section4 from './components/home/section-4';
import Section5 from './components/home/section-5';
import Section6 from './components/home/section-6';
import Section7 from './components/home/section-7';
import Section8 from './components/home/section-8';
import Footer from './components/home/footer';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Section1/>

        <IconHome/>

        <Section2/>

        <Section3/>

        <Section4/>

        <Section5/>

        <Section6/>

        <Section7/>

        <Section8/>

        <Footer/>
    </div>
  );
}

export default App;
