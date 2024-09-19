import React from 'react';
import { FilterType } from '../../pages/Product/Product';

interface SidebarProps {
    onFilterChange: (filterType: FilterType, value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange('category', e.target.checked ? e.target.name : '');
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange('price', e.target.value);
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange('brand', e.target.checked ? e.target.name : '');
    };

    return (
        <div className="flex-[0.8]">
            <div className="flex justify-center items-center py-4">
                <div className="w-1/2 bg-gray-100 px-6 py-10 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="flex justify-left items-center gap-1">
                        <input
                            type="checkbox"
                            name="Sports"
                            className="w-4 h-4 checked:bg-blue-700 border-none rounded-md cursor-pointer"
                            onChange={handleCategoryChange}
                        />
                        <p className="text-sm font-medium">Sports</p>
                    </div>
                    <div className="flex justify-left items-center gap-1 py-3">
                        <input
                            type="checkbox"
                            name="Fitness"
                            className="w-4 h-4 checked:bg-blue-700 border-none rounded-md cursor-pointer"
                            onChange={handleCategoryChange}
                        />
                        <p className="text-sm font-medium">Fitness</p>
                    </div>
                </div>
            </div>

            {/* Filter by price */}
            <div className="flex justify-center items-center py-4">
                <div className="w-1/2 bg-gray-100 px-6 py-10 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Price</h2>
                    <div className="flex justify-left items-center gap-1">
                        <input type="range" name="price" min="0" max="100" className="w-full" onChange={handlePriceChange} />
                    </div>
                </div>
            </div>

            {/* Filter by brand */}
            <div className="flex justify-center items-center py-4">
                <div className="w-1/2 bg-gray-100 px-6 py-10 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Brand</h2>
                    <div className="flex justify-left items-center gap-1">
                        <input
                            type="checkbox"
                            name="Puma"
                            className="w-4 h-4 checked:bg-blue-700 border-none rounded-md cursor-pointer"
                            onChange={handleBrandChange}
                        />
                        <p className="text-sm font-medium">Puma</p>
                    </div>
                    <div className="flex justify-left items-center gap-1 py-3">
                        <input
                            type="checkbox"
                            name="Mks"
                            className="w-4 h-4 checked:bg-blue-700 border-none rounded-md cursor-pointer"
                            onChange={handleBrandChange}
                        />
                        <p className="text-sm font-medium">Mks</p>
                    </div>
                    <div className="flex justify-left items-center gap-1">
                        <input
                            type="checkbox"
                            name="Nike"
                            className="w-4 h-4 checked:bg-blue-700 border-none rounded-md cursor-pointer"
                            onChange={handleBrandChange}
                        />
                        <p className="text-sm font-medium">Nike</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
