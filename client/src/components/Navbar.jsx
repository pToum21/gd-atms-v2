import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-3 bg-gray-800 text-white">
        <div>
            <Link to="/" className="text-2xl font-bold">Chat App</Link>
        </div>
        <div>
            <Link to="/login" className="p-2">Login</Link>
            <Link to="/signup" className="p-2">Signup</Link>
        </div>
        </nav>
    );
}

export default Navbar;