import React, { useState } from "react";
import { Link } from "react-router";

export default function manav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="w-full flex flex-wrap justify-between items-center p-4 px-6 md:px-20 bg-red-500 text-white">
        {/* Logo */}
        <img src="/Images/logo.png" alt="logo" className="h-12" />

        {/* Burger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 w-full md:w-auto`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              Le Concept
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Baziks App
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Les offres
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Obtenir son pass
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
