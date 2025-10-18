// src/pages/Team.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
    const members = [
        {
            name: "Malak M. Sadiq",
            role: "Chief Editor",
            image: "/member1.jpeg",
        },
        {
            name: "Ali Usmani",
            role: "Managing Editor",
            image: "/member2.jpeg",
        },
        {
            name: "Khalid Khan",
            role: "News Editor",
            image: "/member4.jpeg",
        },
        {
            name: "Imran Sheikh",
            role: "Special Representative Reporter",
            image: "/member2.jpg",
        },
        {
            name: "Muhammad Kashif Memon",
            role: "Marketing Management Director",
            image: "/member.jpeg", 
        },
    ];

    const createSlug = (name) =>
        name.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase();

    return (
        <div className="bg-white py-12 px-6 md:px-20">

            {/* Chief Editor Section */}
            <section className="flex flex-col md:flex-row items-center gap-12 mb-8 bg-green-800 p-8 rounded-xl shadow-lg">
                <div className="md:w-1/2 flex flex-col justify-center animate-fadeInLeft text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Chief Editor</h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Malak M. Sadiq</h2>
                    <p className="text-lg mb-6">
                        With years of experience in journalism, Malak M. Sadiq leads Pakistan Ki Awaz with dedication, integrity, and a commitment to delivering the most accurate and timely news.
                    </p>
                    <Link
                        to={`/team/profile#${createSlug("Malak M. Sadiq")}`}
                        className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-fit text-center shadow-md hover:shadow-xl"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="md:w-1/2 flex justify-center items-center overflow-hidden rounded-xl shadow-md animate-fadeInRight">
                    <img
                        src="/img.png"
                        alt="Malak M. Sadiq"
                        className="w-full max-h-[550px] md:max-h-[650px] object-cover rounded-xl transform hover:scale-105 transition duration-500"
                    />
                </div>
            </section>



            {/* Team Members Section */}
            <section>
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
                    Our Team Members
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Top row: first 3 members */}
                    {members.slice(0, 3).map((member, index) => (
                        <div
                            key={index}
                            className="bg-green-800 rounded-xl shadow-lg overflow-hidden text-center p-4 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 min-h-[28rem]"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 md:h-96 object-cover rounded-xl transform hover:scale-105 transition duration-500"
                                />
                            </div>
                            <h3 className="text-white font-semibold text-lg mt-4">{member.name}</h3>
                            <p className="text-green-200 text-sm">{member.role}</p>
                            <Link
                                to={`/team/profile#${createSlug(member.name)}`}
                                className="mt-3 inline-flex items-center justify-center bg-white text-green-800 px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 group"
                            >
                                View Profile
                                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>
                        </div>
                    ))}

                    {/* Bottom row: remaining 2 members */}
                    {members.slice(3).map((member, index) => (
                        <div
                            key={index + 3}
                            className="bg-green-800 rounded-xl shadow-lg overflow-hidden text-center p-4 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 min-h-[28rem]"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 md:h-96 object-cover rounded-xl transform hover:scale-105 transition duration-500"
                                />
                            </div>
                            <h3 className="text-white font-semibold text-lg mt-4">{member.name}</h3>
                            <p className="text-green-200 text-sm">{member.role}</p>
                            <Link
                                to={`/team/profile#${createSlug(member.name)}`}
                                className="mt-3 inline-flex items-center justify-center bg-white text-green-800 px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 group"
                            >
                                View Profile
                                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
