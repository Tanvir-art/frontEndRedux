import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

interface UserDetails {
    name: string;
    email: string;
    phone: string;
    address: string;
}

const CheckoutPage: React.FC = () => {
    //   const history = useHistory();
    const [userDetails, setUserDetails] = useState<UserDetails>({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handlePlaceOrder = () => {
        // Process the order and update the stock
        // Redirect to success page
        // history.push('/success');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mt-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">Checkout</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-2">User Details</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleInputChange}
                            placeholder="Delivery Address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-2">Payment Methods</h2>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                defaultChecked
                                className="form-radio h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-900">Cash on Delivery</span>
                        </label>
                    </div>
                </div>
                <Link to="/success">
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white font-semibold py-3 rounded-md"
                    >
                        Place Order
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CheckoutPage;
