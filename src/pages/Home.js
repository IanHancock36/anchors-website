import React from 'react';
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Image from '../images/anchor-037.jpg'

const Home = () => {
    return (
        <>
            <Header/>
            <Hero image = {Image} /> 
        </>
    )
}

export default Home
