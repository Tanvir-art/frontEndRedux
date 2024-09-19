import React from 'react';

interface StoreLocation {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    image: string;
}

const storeLocations: StoreLocation[] = [
    {
        name: 'Main Store',
        address: '123 Main Street',
        city: 'Cityville',
        state: 'State',
        zip: '12345',
        phone: '+1 (123) 456-7890',
        image: 'https://via.placeholder.com/600x400',
    },
    {
        name: 'Branch Store',
        address: '456 Branch Avenue',
        city: 'Townsville',
        state: 'State',
        zip: '54321',
        phone: '+1 (456) 789-0123',
        image: 'https://via.placeholder.com/600x400',
    },
];

const StoreLocations: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Store Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {storeLocations.map((location, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={location.image} alt={location.name} className="w-full h-64 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.name}</h3>
                                <p className="text-lg text-gray-600 mb-2">{location.address}</p>
                                <p className="text-lg text-gray-600 mb-2">{location.city}, {location.state} {location.zip}</p>
                                <p className="text-lg text-gray-600 mb-2">Phone: {location.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoreLocations;
