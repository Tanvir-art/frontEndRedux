import { useState } from 'react';
import ProductCard from "../../myComponents/ProductCard/ProductCard";
import Sidebar from "../../myComponents/Sidebar/Sidebar";
import { useGetProductsQuery } from "../../redux/api/api";
import { Tshop } from "../../redux/feature/shopSlice";
export type FilterType = 'category' | 'price' | 'brand';

interface Filters {
    category?: string;
    price?: string;
    brand?: string;
}

const Product = () => {
    const [filters, setFilters] = useState<Filters>({});
    const { data, isLoading, isError } = useGetProductsQuery(filters);

    const handleFilterChange = (filterType: FilterType, value: string) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value || undefined
        }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading products</div>;
    }

    return (
        <div className="flex">
            <Sidebar onFilterChange={handleFilterChange} />

            <div className="flex-[2] py-6">
                <div className="grid grid-cols-3 gap-4 mr-10">
                    {data?.map((product: Tshop) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
