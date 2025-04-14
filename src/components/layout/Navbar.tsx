
import React from "react";
import { Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-gray-500 hover:text-blue-800">Home</a>
          <a href="/contato" className="text-gray-500 hover:text-blue-800">Contato</a>
          <a href="/sobre" className="text-gray-500 hover:text-blue-800">Sobre</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-blue-800">
            <span className="mr-1">+</span>
            <span>3</span>
          </button>
          <button className="text-gray-500 hover:text-blue-800">
            <Bell size={18} />
          </button>
          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={14} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
