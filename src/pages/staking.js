import React from 'react';
import Header from '../layout/UniversalHeader/header';
import Footer from '../layout/Footer/Footer';
import Boxes from '../components/StakingComponents/StatBoxes/Boxes';
import StakeInputs from '../components/StakingComponents/StakeInputs/StakeInputs';

const Staking = () => {
    return (
        <div className='max-width top-150 staking'>
            <Header/>
            <Boxes/>
            <StakeInputs/>
            <Footer/>
        </div>
    );
}

export default Staking;
