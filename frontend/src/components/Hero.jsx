import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-blue-500 text-white text-center py-20" >
            <h1 className="text-4xl font-bold">Welcome to Our Health Community</h1>
            <p className="mt-4 text-lg">Your health is our priority.</p>
            <Link to="/login">
                <button className="bg-white text-blue-500 mt-6 px-6 py-3 rounded-full">Login</button>
            </Link>
        </section >
    );
};

export default Hero;