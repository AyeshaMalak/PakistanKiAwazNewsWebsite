// src/pages/TeamProfile.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TeamProfile() {
    const location = useLocation();
    const hash = location.hash.replace("#", ""); // get member slug from hash
    const [selectedMember, setSelectedMember] = useState(null);

    const members = [
        {
            name: "Malak M. Sadiq",
            slug: "malak-m-sadiq",
            role: "Chief Editor",
            image: "/member1.jpeg",
            description:
                "With years of experience in journalism, Malak M. Sadiq leads Pakistan Ki Awaz with dedication, integrity, and a commitment to delivering the most accurate and timely news. Oversees investigative reports and mentors young journalists.",
        },
        {
            name: "Ali Usmani",
            slug: "ali-usmani",
            role: "Managing Editor",
            image: "/member2.jpeg",
            description:
                "Ali Usmani manages editorial content and workflow, ensuring news coverage is timely, accurate, and engaging.",
        },
        {
            name: "Khalid Ahmed Khan",
            slug: "khalid-khan",
            role: "News Editor",
            image: "/member4.jpeg",
            description:
                "Khalid Ahmed Khan is a dedicated editor at Pakistan Ki Awaz, ensuring all news content is accurate, polished, and delivered with clarity and professionalism.",
        },
        {
            name: "Imran Sheikh",
            slug: "imran-sheikh",
            role: "Special Representative Reporter",
            image: "/member2.jpg",
            description:
                "Imran Sheikh brings real-time reporting from field locations, covering political, social, and community news with accuracy and reliability.",
        },
        {
            name: "Muhammad Kashif Memon",
            slug: "muhammad-kashif-memon",
            role: "Marketing Management Director",
            image: "/member.jpeg", 
            description:
                "Muhammad Kashif Memon has been appointed as the Marketing Management Director by the Chief Editor of Roznama Pakistan Ki Awaz. He oversees marketing strategy, promotions, and brand growth while ensuring effective communication with stakeholders.",
        },
    ];

    useEffect(() => {
        if (hash) {
            const member = members.find((m) => m.slug === hash);
            setSelectedMember(member || null);
        }
    }, [hash]);

    const memberToShow = selectedMember || members[0];

    return (
        <div className="bg-white py-12 px-6 md:px-20 space-y-16">
            <section className="flex flex-col md:flex-row items-center gap-12 bg-green-800 p-8 rounded-lg shadow-lg">
                <div className="md:w-1/2 flex flex-col justify-center text-white animate-fadeInLeft">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{memberToShow.name}</h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">{memberToShow.role}</h2>
                    <p className="text-lg">{memberToShow.description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center animate-fadeInRight">
                    <img
                        src={memberToShow.image}
                        alt={memberToShow.name}
                        className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-md"
                    />
                </div>
            </section>
        </div>
    );
}
