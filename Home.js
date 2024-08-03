import React from 'react';
// import './Home.css';
import '../css/Home.css';
// import 'normalize.css';
import Navbar from './navbar';
import HeroSection from './herosection';
import Container1 from './container1';
import Container2 from './container2';
import Container3 from './container3';
import Container4 from './container4';
import FAQSection from './FAQSection';
import Question from './question';
import Footer from './footer';
import Footend from './footend';
import FormSection from './formsection';
import MapContainer from './Map';

function Home() {
    return (
        <>
        <link ></link>
            <Navbar />
            <section id='Home'>
            <HeroSection />
            </section>  
            <section id='Service'>
            <Container1 />
            </section>
            <Container2 />
            <Container4/>
            <Container3 />
            <MapContainer/>
            <FAQSection />
            <Question />
            <section id='Contact'>
            <FormSection />
            </section>
            <Footer />
            <Footend />
            
        </>
    );
}

export default Home;
