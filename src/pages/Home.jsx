// src/pages/Home.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-white py-12 px-6 md:px-20">

            {/* Hero Section */}
            <section className="mb-12 flex flex-col md:flex-row items-center gap-12 relative">

                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col justify-center animate-fadeInLeft">
                    <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-6">
                        Pakistan Ki Awaz
                    </h1>
                    <p className="text-green-900 text-lg mb-6">
                        Your trusted source for the latest news, live coverage, and updates from across Pakistan. Stay informed, stay ahead!
                    </p>
                    <a
                        href="https://www.youtube.com/@Dailypakistankiawaznewshdtv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition w-fit inline-block"
                    >
                        Watch Live
                    </a>
                </div>

                {/* Hero Image + Social Links */}
                <div className="md:w-1/2 relative flex justify-center items-center animate-fadeInRight">
                    <img
                        src="/pakistan.png"
                        alt="Hero"
                        className="w-full max-h-80 md:max-h-96 object-cover rounded-md shadow-md"
                    />

                    {/* Vertical Social Links */}
                    <div className="hidden md:flex flex-col gap-4 absolute right-[-60px] top-1/4 text-white">
                        <a
                            href="#"
                            className="bg-green-900 p-3 rounded-full hover:bg-green-800 transition"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="#"
                            className="bg-green-900 p-3 rounded-full hover:bg-green-800 transition"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/pakistan_ki_awaz_/?utm_source=ig_web_button_share_sheet"
                            className="bg-green-900 p-3 rounded-full hover:bg-green-800 transition"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://www.youtube.com/@Dailypakistankiawaznewshdtv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-900 p-3 rounded-full hover:bg-green-800 transition"
                        >
                            <FaYoutube size={20} />
                        </a>
                    </div>


                </div>
            </section>

            {/* Featured Clip Section */}
            <section className="mb-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                    Featured Clip
                </h2>
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/t5PijP19MhQ?start=0"
                    title="Featured Clip"
                    allowFullScreen
                    className="rounded-md shadow-md"
                ></iframe>
                <p className="mt-4 text-green-900 text-lg max-w-3xl mx-auto">
                    Watch this highlight from Pakistan Ki Awaz, showcasing the latest news and in-depth coverage. Stay updated with current affairs, exclusive interviews, and top stories from across the country. Our featured clips bring you the most important events in concise and engaging segments, keeping you informed anytime, anywhere.
                </p>
            </section>

        </div>
    );
}
