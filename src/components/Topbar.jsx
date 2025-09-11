import React from "react";
import { Phone, Clock, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden md:flex text-white text-sm w-full bg-green-700 overflow-hidden">
      {/* Left Section (Green with Diagonal Cut) */}
      <div className="relative bg-green-800 flex items-center gap-6 px-6 py-2 w-2/5 clip-diagonal">
        <span className="flex items-center gap-2">
          <Phone size={16} /> 0313-333-8407
        </span>
        <span className="flex items-center gap-2">
          Cheif-Editor:Malak M.Sadiq
        </span>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center px-6 py-2">
        <span className="flex items-center gap-2">
          <Mail size={16} /> pakistankiawaz@gmail.com
        </span>
      </div>
    </div>
  );
}
