import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409" alt="Kaze Serenity Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Kaze Serenity</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Tempat perlindungan bagi para gamer, kreator, dan pencari ketenangan untuk terhubung, berkembang, dan bergembira dalam lingkungan yang bersahabat dan suportif.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-300">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#collaborations" className="text-gray-400 hover:text-white transition-colors duration-200">Collaborations</a></li>
                <li><a href="#partnership" className="text-gray-400 hover:text-white transition-colors duration-200">Partnership</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-200">Team</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-300">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/j7Gtw38FVw" className="text-gray-400 hover:text-white transition-colors duration-200">Server Rules</a></li>
                <li><a href="https://discord.gg/kazeindo" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</a></li>
                <li><a href="https://discord.gg/kazeindo" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="https://discord.gg/kazeindo" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold mb-3 text-indigo-300">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/kazeindo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">Discord</a></li>
                <li><a href="https://www.instagram.com/kazeindo_/" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kaze Serenity. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Kaze Serenity Expert Developer Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;