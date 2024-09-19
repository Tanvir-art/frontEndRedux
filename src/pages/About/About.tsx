import React from 'react';
import OurTeam from '../../myComponents/Team/Team';
import StoreLocations from '../../myComponents/Store/Store';

const About: React.FC = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-gray-200 py-4 px-8 mb-8'>

                <nav className="">
                    <div className="container mx-auto flex items-center">
                        <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">About Us</span>
                    </div>
                </nav>
            </div>
            {/* About Our Company Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Company"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Our Company</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                We are a leading company in the industry with years of experience in delivering top-notch services to our clients. Our mission is to provide exceptional value and exceed our customers' expectations through innovation and dedication.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Our team is composed of highly skilled professionals who are passionate about what they do. We believe in fostering a collaborative and inclusive work environment that encourages growth and creativity.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Join us on our journey to make a significant impact and drive positive change in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Mission & Vision</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-lg text-gray-600">
                                Our mission is to deliver exceptional value to our customers by providing innovative and reliable solutions that exceed their expectations. We strive to create a positive impact in the communities we serve and foster a culture of excellence and continuous improvement within our organization.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-lg text-gray-600">
                                Our vision is to be the leading provider in our industry, recognized for our commitment to quality, innovation, and customer satisfaction. We aim to build a sustainable future by embracing new technologies and practices that drive growth and contribute to the well-being of our stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold text-center mb-8">Contact Information</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Contact"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                Address: 123 Main Street, City, Country
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Phone: +1 (123) 456-7890
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Email: info@example.com
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Follow us on <a href="#" className="text-blue-500 hover:underline">Twitter</a> and <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <OurTeam />

            {/* Store Locations Section */}
            <StoreLocations />
        </>
    );
};

export default About;
