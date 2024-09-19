import React, { useEffect, useState } from 'react';
import { useDeleteFromCartMutation, useGetCartQuery, useUpdateCartMutation, } from '../../redux/api/api'; // Adjust imports as necessary
import { Link } from 'react-router-dom';

interface CartItem {
    _id?: string; // Add _id to track the product being edited
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    description: string;
    stock: number; // Assuming stock is the quantity in your API
    url: string;
    quantity: number; // Add quantity to CartItem for managing cart state
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { data: cartData, refetch } = useGetCartQuery(""); // Fetch cart data from the backend
    const [updateCart] = useUpdateCartMutation(); // Mutation for updating cart items
    const [deleteFromCart] = useDeleteFromCartMutation(); // Mutation for removing cart items

    useEffect(() => {
        if (cartData) {
            setCartItems(cartData);
        }
    }, [cartData]);

    const handleIncrement = async (id: string) => {
        const itemToUpdate = cartItems.find(item => item._id === id);
        if (itemToUpdate) {
            const updatedItem = { ...itemToUpdate, quantity: itemToUpdate.quantity + 1 };
            await updateCart({ _id: id, data: updatedItem });
            refetch(); // Refetch cart data after update
        }
    };

    const handleDecrement = async (id: string) => {
        const itemToUpdate = cartItems.find(item => item._id === id);
        if (itemToUpdate && itemToUpdate.quantity > 1) {
            const updatedItem = { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 };
            await updateCart({ _id: id, data: updatedItem });
            refetch(); // Refetch cart data after update
        }
    };

    const handleRemove = async (id: string) => {
        console.log(`Removing item with ID: ${id}`);
        await deleteFromCart(id);
        refetch(); // Refetch cart data after removal
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-6">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">Your Cart</h1>
                <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                        <div key={item._id} className="py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-medium text-gray-900">{item.name}</h2>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => handleDecrement(item._id!)}
                                        className="bg-gray-200 px-2 py-1 rounded-md text-gray-600"
                                    >
                                        -
                                    </button>
                                    <span className="mx-4">{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item._id!)}
                                        className="bg-gray-200 px-2 py-1 rounded-md text-gray-600"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xl font-medium text-gray-900">${item.price.toFixed(2)}</span>
                                <button
                                    onClick={() => handleRemove(item._id!)}
                                    className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-4 flex items-center justify-between mt-6">
                    <h2 className="text-2xl font-medium text-gray-900">Total</h2>
                    <span className="text-2xl font-medium text-gray-900">${calculateTotal()}</span>
                </div>
                <Link to="/checkout">
                    <button className="mt-6 w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white font-semibold py-3 rounded-md">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;
