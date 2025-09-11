// components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState("");

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? "" : menu);
    };

    return (
        <nav className="bg-white shadow-lg rounded-b-2xl w-full relative z-50">
            <div className="flex justify-between items-center px-6 py-5 md:py-6 max-w-screen-xl mx-auto">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold flex items-center gap-2"
                >
                    <span className="text-green-700">Pakistan</span>
                    <span className="text-white bg-green-700 px-3 py-1 rounded-full">Ki Awaz</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-green-700 font-medium items-center">
                    <li className="hover:text-green-900"><Link to="/">Home</Link></li>
                    <li className="hover:text-green-900"><Link to="/about">About</Link></li>

                    {/* Pages Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown("pages")}
                            className="flex items-center gap-1 hover:text-green-900"
                        >
                            Pages <ChevronDown size={16} />
                        </button>
                        {dropdown === "pages" && (
                            <ul className="absolute bg-white shadow-lg rounded mt-2 w-44 text-sm z-50">
                                <li className="px-4 py-2 hover:bg-green-100">
                                    <Link to="/team">Team Members</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="hover:text-green-900"><Link to="/videos">Videos</Link></li>
                    <li className="hover:text-green-900"><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Desktop Button */}
                <button className="hidden md:block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-green-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg rounded-b-2xl">
                    <Link to="/" className="block hover:text-green-900">Home</Link>
                    <Link to="/about" className="block hover:text-green-900">About</Link>
                    <Link to="/team" className="block hover:text-green-900">Team Members</Link>
                    <Link to="/videos" className="block hover:text-green-900">Videos</Link>
                    <Link to="/contact" className="block hover:text-green-900">Contact</Link>
                    <button className="w-full bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </button>
                </div>
            )}
        </nav>
    );
}
