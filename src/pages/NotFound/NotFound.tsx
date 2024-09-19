import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-9xl font-bold text-indigo-600">404</h1>
            <h2 className="mt-4 text-3xl font-semibold text-gray-800">Oops! Page not found.</h2>
            <p className="mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist or has been moved.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
