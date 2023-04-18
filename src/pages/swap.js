import React from 'react';
import Header from '../layout/UniversalHeader/header';
import Footer from '../layout/Footer/Footer';
import SwapCard from '../components/SwapComponents/SwapCard/SwapCard';

const Swap = () => {
    return (
        <div className='max-width top-150'>
            <Header/>
            <SwapCard/>
            <Footer/>
        </div>
    );
}

export default Swap;
