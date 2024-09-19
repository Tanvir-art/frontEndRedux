import React from 'react';
import { useGetProductsQuery } from '../../redux/api/api';
import { Link } from 'react-router-dom';

import CustomRating from '../SingleProduct/CustomRating';
interface Product {
    _id?: string; // Add _id to track the product being edited
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    description: string;
    quantity: number; // Assuming stock is the quantity in your API
    url: string;
}
const FeaturedProducts: React.FC = () => {
    const { data: products } = useGetProductsQuery({});


    // Limit to 4 products
    const featuredProducts = products?.slice(0, 4);



    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts?.map((product: Product) => (
                        <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={product.url} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-500 mb-1">Category: {product.category}</p>
                                <p className="text-gray-500 mb-1">Brand: {product.brand}</p>
                                <p className="text-gray-500 mb-1">Stock: {product.quantity}</p>
                                <CustomRating rating={product.rating} />
                                <p className="mt-4 text-gray-700">{product.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xl font-bold">${product.price}</span>
                                    <Link to={`/product/${product._id}`} >
                                        <button

                                            className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white px-4 py-2 rounded-md"
                                        >
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
