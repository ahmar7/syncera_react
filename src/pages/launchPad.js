import React from 'react';
import Header from '../layout/UniversalHeader/header';
import Footer from '../layout/Footer/Footer';
import Banner from '../components/LaunchPadComponents/Banner/Banner';
import Projects from '../components/LaunchPadComponents/Projects/Projects';

const LaunchPad = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Projects/>
            <Footer/>
            
        </div>
    );
}

export default LaunchPad;
