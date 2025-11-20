import React from 'react';


const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 20}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <img src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409" alt="Kaze Serenity Logo" className="h-16 w-16 text-indigo-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bergabunglah dengan Kami & Jalani Ketenangan.</h2>
          <p className="max-w-2xl mx-auto text-xl text-indigo-200 mb-10">
            Jadilah bagian dari komunitas yang berkembang di mana persahabatan terbentuk, kreativitas berkembang, dan getaran positif berlimpah.
          </p>

          {/* Discord-like preview card */}
          <div className="max-w-lg mx-auto bg-[#36393f] rounded-lg overflow-hidden shadow-xl mb-10">
            <div className="bg-[#2f3136] p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                <img src='https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409' className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Kaze Serenity</h3>
                <p className="text-gray-400 text-sm">500+ online • 1,000+ members</p>
              </div>
            </div>
            <div className="p-6 text-left">
              <p className="text-gray-300 mb-4">Jadilah bagian dari komunitas yang berkembang di mana persahabatan terbentuk, kreativitas berkembang, dan getaran positif berlimpah.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4f545c] text-gray-300 px-2 py-1 rounded text-xs">gaming</span>
                <span className="bg-[#4f545c] text-gray-300 px-2 py-1 rounded text-xs">community</span>
                <span className="bg-[#4f545c] text-gray-300 px-2 py-1 rounded text-xs">events</span>
                <span className="bg-[#4f545c] text-gray-300 px-2 py-1 rounded text-xs">giveaways</span>
              </div>
            </div>
          </div>

          <a 
            href="https://discord.gg/kazeindo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-indigo-900 hover:bg-indigo-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Join Discord Server
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;