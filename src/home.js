import './podaci.css';
import './forma.css';
import React from 'react';
import { useLocation } from "react-router-dom";
import Projekat from "./Projekat";
import Navbar from './navBar';

const Home = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'center', border: '1px solid black' }}> </h1>
            <Projekat />
        </>
    );
}

export default Home;