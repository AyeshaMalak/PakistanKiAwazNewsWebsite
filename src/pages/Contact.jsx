// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp message link + redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "923133338407"; // Malak Sadiq's WhatsApp number
    const text = `Message to Malak Sadiq:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp popup in new tab
    window.open(url, "_blank");

    // Redirect to homepage after 1 second
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-green-50 min-h-screen">
      {/* Top Image */}
      <div className="flex justify-center mb-8">
        <img
          src="/pakistan1.png"
          alt="Contact"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 text-center">
        Contact Pakistan Ki Awaz
      </h1>
      <p className="text-green-900 text-lg mb-8 text-center">
        We would love to hear from you! Send us a message directly via WhatsApp.
      </p>

      {/* Contact Form */}
      <form
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-green-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>
        <div>
          <label className="block text-green-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>
        <div>
          <label className="block text-green-700 font-semibold mb-2">Message</label>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-green-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition w-full md:w-fit mx-auto block"
        >
          Send via WhatsApp
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center text-green-900 space-y-2">
        <p>Email: info@pakistankiawaz.com</p>
        <p>Phone: 0313-333-8407 (WhatsApp)</p>
        <p>Address: Pakistan Ki Awaz News Channel, Islamabad, Pakistan</p>
      </div>
    </div>
  );
}
