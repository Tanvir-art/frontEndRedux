import { useParams } from 'react-router-dom';
// import { FaStar, FaRegStar } from 'react-icons/fa';
import { useAddToCartMutation, useGetProductsQuery } from '../../redux/api/api';
import CustomRating from './CustomRating'; // Import the custom rating component

interface Product {
    _id?: string;
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    description: string;
    stock: number;
    url: string;
}

const SingleProduct = () => {
    const [addToCart] = useAddToCartMutation();
    const { id } = useParams<{ id: string }>();
    const { data: allProducts, isLoading, isError } = useGetProductsQuery('');

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading product data.</p>;

    const product = allProducts?.find((singleProduct: Product) => singleProduct._id === id);
    if (!product) return <p>Product not found.</p>;

    const handleAddToCart = async (product: Product) => {
        const cartData = {
            name: product.name,
            price: product.price,
            category: product.category,
            brand: product.brand,
            rating: product.rating,
            description: product.description,
            quantity: 1,
            url: product.url,
        };
        await addToCart(cartData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <img src={product.url} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
                        <p className="text-sm text-gray-500 mb-4">Brand: {product.brand}</p>

                        {/* Replace with CustomRating component */}
                        <CustomRating rating={product.rating} />

                        <p className="text-lg font-semibold text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                        <p className="text-gray-700 mb-4">{product.description}</p>

                        <p className={`text-sm font-medium mb-4 ${product.quantity > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {product.quantity > 0 ? `In Stock (${product.quantity} available)` : 'Out of Stock'}
                        </p>
                    </div>
                    <button
                        className={`w-full py-3 px-6 rounded-lg text-white font-bold ${product.quantity > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={product.quantity === 0}
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
