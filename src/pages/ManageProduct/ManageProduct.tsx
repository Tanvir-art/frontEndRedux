import React, { useState } from "react";
import {
    useAddProductMutation,
    useDeleteProductMutation,
    useGetProductsQuery,
    useUpdateProductMutation,
} from "../../redux/api/api";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Tshop } from "../../redux/feature/shopSlice";

interface Product {
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    description: string;
    quantity: number;
    url: string;
    _id?: string; // Add _id to track the product being edited
}

const ManageProducts: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        name: "",
        price: 0,
        category: "",
        brand: "",
        rating: 0,
        description: "",
        quantity: 0,
        url: "",
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const { data: allProducts } = useGetProductsQuery("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditing && product?._id) {

            console.log("Updating product:", product);
            await updateProduct(product);
        } else {
            await addProduct(product);
        }

        // Reset the form after submission
        setProduct({
            name: "",
            price: 0,
            category: "",
            brand: "",
            rating: 0,
            description: "",
            quantity: 0,
            url: "",
        });
        setIsEditing(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEdit = (product: Tshop) => {
        setProduct({
            ...product,
            _id: product._id,  // Ensure _id is preserved
        });
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        console.log(id)
        await deleteProduct(id);
    };


    return (
        <div>
            <p className="text-2xl text-center font-bold">Manage Products</p>

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto p-4 shadow-md rounded-lg bg-white"
            >
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Brand
                        </label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={product.brand}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="rating"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={product.rating}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image URL
                    </label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={product.url}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {product._id ? "Update Product" : "Add Product"}
                </button>
            </form>

            <div className="grid grid-cols-4 gap-3">
                {allProducts?.map((product: Tshop) => (
                    <Card
                        key={product._id}
                        className="flex flex-col justify-between shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                    >
                        <CardContent className="p-0">
                            <img
                                src={product.url}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </CardContent>
                        <div className="p-4 flex flex-col items-center">
                            <CardHeader className="p-0 text-center mb-2">
                                <CardTitle className="text-xl font-semibold">
                                    {product.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mt-2 text-center">
                                <p className="text-sm font-medium">Price: ${product.price}</p>
                                <div className="flex gap-4">
                                    <p className="text-sm text-gray-500">
                                        Brand: {product.brand}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Category: {product.category}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-0 w-full flex justify-center gap-4">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
                                >
                                    Update
                                </button>
                                <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200">
                                    Delete
                                </button>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;
