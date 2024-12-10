"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Featured Cakes', href: '#featured' },
    { name: 'Custom Orders', href: '#order' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="logo text-4xl text-white">Sweet Delights</h1>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-white font-semibold"
            >
              {item.name}
            </a>
          ))}
          <a href="#order" className="cta-button">
            Order Now
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden p-4 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-primary hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#order"
              className="block mt-4 text-center cta-button"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}