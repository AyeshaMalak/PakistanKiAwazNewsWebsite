// src/pages/About.jsx
import React from "react";
import { FaCheckCircle, FaBullhorn, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-white">

      {/* Top Image */}
      <div className="w-full flex justify-center">
        <img
          src="/channels4_banner.jpg"
          alt="Daily Pakistan Ki Awaz"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-10 py-12 max-w-5xl mx-auto">
        
        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-3 sm:mb-4">
          News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara
        </h2>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700 mb-5 sm:mb-6">
          Daily Pakistan Ki Awaz HD
        </h1>

        {/* Detailed Description */}
        <p className="text-green-900 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          Daily Pakistan Ki Awaz is a trusted news channel delivering comprehensive coverage from across Pakistan. We bring you breaking news, in-depth analysis, and exclusive interviews to keep you informed about current affairs, sports events, social issues, and public concerns. With a dedicated team of professional journalists, our channel ensures accurate and timely updates, highlighting stories that matter to the people of Pakistan. 
        </p>

        {/* YouTube Info */}
        <p className="text-green-900 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          More info: <a href="https://www.youtube.com/@Dailypakistankiawaznewshdtv" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">
            www.youtube.com/@Dailypakistankiawaznewshdtv
          </a>
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 mb-8 text-green-900 text-sm sm:text-base md:text-lg">
          <p className="mb-2 sm:mb-0"><strong>Joined:</strong> Sep 28, 2022</p>
          <p className="mb-2 sm:mb-0"><strong>Subscribers:</strong> 25</p>
          <p className="mb-2 sm:mb-0"><strong>Videos:</strong> 99</p>
          <p><strong>Views:</strong> 863</p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1 */}
          <div className="bg-green-50 rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-green-700">
              <FaCheckCircle size={28} className="sm:w-7 sm:h-7" />
              <h3 className="text-lg sm:text-xl font-bold">Truthful News</h3>
            </div>
            <p className="text-green-900 text-sm sm:text-base leading-relaxed">
              We provide unbiased, verified, and truthful news from across Pakistan to keep our viewers fully informed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-green-700">
              <FaBullhorn size={28} className="sm:w-7 sm:h-7" />
              <h3 className="text-lg sm:text-xl font-bold">Breaking Updates</h3>
            </div>
            <p className="text-green-900 text-sm sm:text-base leading-relaxed">
              Stay ahead with the latest breaking news, exclusive interviews, and in-depth coverage from all regions of Pakistan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 rounded-lg p-5 sm:p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-green-700">
              <FaUsers size={28} className="sm:w-7 sm:h-7" />
              <h3 className="text-lg sm:text-xl font-bold">Audience Focused</h3>
            </div>
            <p className="text-green-900 text-sm sm:text-base leading-relaxed">
              Our content focuses on public interests, social issues, and stories that impact everyday lives of people in Pakistan.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
