// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 relative">

      {/* Wave SVG Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#065f46"
            d="M0,96L60,101.3C120,107,240,117,360,128C480,139,600,149,720,160C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-green-700 pb-10">
        
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Pakistan Ki Awaz</h3>
          <p className="text-green-200 text-sm leading-relaxed">
            Your trusted source for the latest news, live coverage, and updates from across Pakistan. Stay informed, stay ahead!
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Subscribe to Our YouTube Channel</h3>
          <p className="text-green-200 text-sm mb-4 leading-relaxed">
            Get the latest news updates directly from Pakistan Ki Awaz on YouTube.
          </p>
          <a
            href="https://www.youtube.com/@Dailypakistankiawaznewshdtv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition shadow-md"
          >
            Subscribe Now
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-green-100">
            <a href="#" className="hover:text-white transition transform hover:scale-110">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">
              <FaTwitter size={22} />
            </a>
            <a href="https://www.instagram.com/pakistan_ki_awaz_/?utm_source=ig_web_button_share_sheet" className="hover:text-white transition transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/@Dailypakistankiawaznewshdtv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-6 text-center text-green-200 text-sm">
        © 2025 Pakistan Ki Awaz. All Rights Reserved. Designed with  by Team.
      </div>
    </footer>
  );
}
