import { useState } from "react";
import { NavigationMenuDemo } from "./NavUi";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-[#1E3A8A]">
            {/* Navbar Container */}
            <div className="flex justify-between items-center py-6 px-8">
                {/* Logo */}
                <div>
                    <p className="text-2xl font-bold text-white">Sporting Goods</p>
                </div>

                {/* Desktop Navigation Menu */}
                <div className="hidden lg:block">
                    <NavigationMenuDemo />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? (
                            <FaTimes className="h-6 w-6" /> // Close icon
                        ) : (
                            <FaBars className="h-6 w-6" /> // Hamburger icon
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="flex flex-col space-y-4 px-8 pb-4 bg-[#1E3A8A]">
                        <NavigationMenuDemo />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
