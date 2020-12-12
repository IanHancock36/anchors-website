import React from 'react';
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Image from "../images/anchor-010.jpg"
import {motion} from 'framer-motion'
import {animationTwo} from '../animations'

const About = () => {
    return (
        <motion.div
        initial ="out"
        animate= "in"
        exit="out"
        variants ={animationTwo}
        >
            <Header/>
            <Hero image={Image}  title='HEY There' desc='Howdy' /> 
            About
        </motion.div>
    )
}

export default About; 
