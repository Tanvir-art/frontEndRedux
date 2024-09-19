import { useGetProductsQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";

interface Product {
    category: string;
}

const CategoryProduct = () => {
    // Use explicit type for data (an array of Product objects)
    const { data } = useGetProductsQuery({}) as { data: Product[] };



    // Filter unique category values
    const uniqueCategories = [...new Set(data?.map((product: Product) => product.category))];
    console.log(uniqueCategories);

    return (
        <div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Product Categories</h2>
                <div className="grid grid-cols-2 gap-4 ">
                    {/* Map through uniqueCategories and display them */}
                    {uniqueCategories?.map((category: string) => (
                        <Link to={`/category/${category}`} key={category}>
                            <div
                                key={category}
                                className="bg-blue-100 py-6 rounded-lg shadow hover:bg-blue-200 transition duration-300 cursor-pointer"
                            >
                                <h1 className="text-xl font-semibold text-blue-900 text-center">{category}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default CategoryProduct;
