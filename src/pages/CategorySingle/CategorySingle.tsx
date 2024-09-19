import { useGetProductsQuery } from "@/redux/api/api";
import { Link, useParams } from "react-router-dom";

interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    brand: string;
    description: string;
    url: string;
}

const CategorySingle = () => {
    const { data, isLoading, isError } = useGetProductsQuery({});
    const { category } = useParams<{ category: string }>(); // Destructure category from useParams
    console.log(category);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    // Filter products based on the selected category
    const filteredProducts = data?.filter((product: Product) => product.category === category);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Products in {category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {filteredProducts?.length ? (
                    filteredProducts.map((product: Product) => (
                        <div key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                                    <img src={product.url} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-500">{product.brand}</p>
                                    <p className="text-lg font-bold text-blue-600">${product.price}</p>
                                    <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No products found in this category.</div>
                )}
            </div>
        </div>
    );
}

export default CategorySingle;
