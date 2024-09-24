import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h1>RegisterPage</h1>
        </div>
    );
};

export default RegisterPage;