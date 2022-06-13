import React from 'react';
import { useLocation } from "react-router-dom";
import Projekat from "./Projekat";
import Navbar from './navBar';
import Footer from './footer';

const Home = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'center', paddingTop: '30px'}}> </h1>
            <Projekat />
            <Footer />
        </>
    );
}

export default Home;