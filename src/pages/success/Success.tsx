import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-6 text-center">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">Order Placed Successfully!</h1>
                <p className="text-lg text-gray-700 mb-4">Thank you for your purchase.</p>
                <div className=''>

                    <Link
                        to="/"
                        className="mt-8 bg-[#1E3A8A] hover:bg-[#3B82F6] text-white font-semibold py-3 px-4 rounded-md"
                    >
                        Go To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
