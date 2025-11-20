import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBackground = isScrolled
    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = isScrolled
    ? 'text-gray-700 dark:text-gray-200'
    : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409" alt="Kaze Serenity Logo" className="h-10 w-10" />
              <span className={`ml-2 text-xl font-bold ${textColor}`}>
                Kaze Serenity
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#about" className={`${textColor} hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200`}>
              About
            </a>
            <a href="#collaborations" className={`${textColor} hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200`}>
              Collaborations
            </a>
            <a href="#partnership" className={`${textColor} hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200`}>
              Partnership
            </a>
            <a href="#events" className={`${textColor} hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200`}>
              Events
            </a>
            <a href="#team" className={`${textColor} hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200`}>
              Team
            </a>
            <ThemeToggle />
            <a 
              href="https://discord.gg/kazeindo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
            >
              Join Now
            </a>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={textColor}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#collaborations" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Collaborations
            </a>
            <a 
              href="#partnership" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Partnership
            </a>
            <a 
              href="#events" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a 
              href="https://discord.gg/kazeindo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-2 bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 rounded-md text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;