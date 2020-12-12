import React from 'react';
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Image from '../images/anchor-037.jpg'
import { motion } from 'framer-motion'
import { animationOne ,transition} from '../animations';

const Home = () => {
    return (
        <motion.div 
        initial ='out' 
        animate ='in' 
        exit ='out' 
        variants ={animationOne} 
        transition= {transition}>
        
            <Header/>
            <Hero image = {Image} title='HEY There' desc='Howdy' /> 
        </motion.div>
    )
}

export default Home;
