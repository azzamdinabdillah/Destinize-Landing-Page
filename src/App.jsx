import './App.css';
import Navbar from './components/navbar/navbar';
import Section_1 from './components/home/section-1';
import IconHome from './components/home/icon';
import Section_2 from './components/home/section-2';
import Section_3 from './components/home/section-3';
import Section_4 from './components/home/section-4';
import Section_5 from './components/home/section-5';
import Section_6 from './components/home/section-6';
import Section_7 from './components/home/section-7';
import Section_8 from './components/home/section-8';
import Footer from './components/home/footer';
import React from 'react';

function App() {
  const width = 280;
    const height = 50;

    let classImg = `rounded-lg mx-auto bg-cover`;

    let classDivImg = `mt-7 relative mb-3`;

  return (
    <div className="App">
        <Navbar/>

        <Section_1/>

        <IconHome/>

        <Section_2/>

        <Section_3/>

        <Section_4/>

        <Section_5/>

        <Section_6/>

        <Section_7/>

        <Section_8/>

        <Footer/>
    </div>
  );
}

export default App;
