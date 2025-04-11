import React, { useState, useEffect, useRef } from "react";
import BH from "../../assets/photoes/BrightHive.png"
import CC from "../../assets/photoes/CodeCrush.png"
import EF from "../../assets/photoes/EchoFlow.png"
import FF from "../../assets/photoes/FormForge.png"
import GG from "../../assets/photoes/GreenGrid.png"
import LS from "../../assets/photoes/LoopStitch.png"
import MM from "../../assets/photoes/MetaMorph.png"
import NN from "../../assets/photoes/NeuroNet.png"
import SN from "../../assets/photoes/SonicNest.png"
import PM from "../../assets/photoes/PixelMint.png"

const allCards = [
  {
    title: "NeuroNet",
    description: "AI-powered neural processing tools.",
    areas: ["Branding", "AI", "UX"],
    href: "https://example.com/neuronet",
    image: NN,
  },
  {
    title: "GreenGrid",
    description: "Eco-friendly energy analytics.",
    areas: ["Web Design", "Sustainability"],
    href: "https://example.com/greengrid",
    image: GG,
  },
  {
    title: "CodeCrush",
    description: "Live coding education platform.",
    areas: ["Education", "Frontend"],
    href: "https://example.com/codecrush",
    image: CC,
  },
  {
    title: "EchoFlow",
    description: "Audio streaming redefined.",
    areas: ["Branding", "Webflow Dev"],
    href: "https://example.com/echoflow",
    image: EF,
  },
  {
    title: "PixelMint",
    description: "NFT marketplace for artists.",
    areas: ["Blockchain", "Web3"],
    href: "https://example.com/pixelmint",
    image: PM,
  },
  {
    title: "FormForge",
    description: "Smart form builder with AI.",
    areas: ["AI", "Productivity"],
    href: "https://example.com/formforge",
    image: FF,
  },
  {
    title: "BrightHive",
    description: "Online learning for bright minds.",
    areas: ["E-learning", "UX"],
    href: "https://example.com/brighthive",
    image: BH,
  },
  {
    title: "LoopStitch",
    description: "Automated code review assistant.",
    areas: ["DevTools", "Automation"],
    href: "https://example.com/loopstitch",
    image: LS,
  },
  {
    title: "SonicNest",
    description: "Sound editing suite for creators.",
    areas: ["Sound Design", "Creator Tools"],
    href: "https://example.com/sonicnest",
    image: SN,
  },
  {
    title: "MetaMorph",
    description: "3D object transformation API.",
    areas: ["3D", "Web Dev"],
    href: "https://example.com/metamorph",
    image: MM,
  },
  {
    title: "LoopStitch",
    description: "Automated code review assistant.",
    areas: ["DevTools", "Automation"],
    href: "https://example.com/loopstitch",
    image: LS,
  },
  {
    title: "SonicNest",
    description: "Sound editing suite for creators.",
    areas: ["Sound Design", "Creator Tools"],
    href: "https://example.com/sonicnest",
    image: SN,
  },
  {
    title: "MetaMorph",
    description: "3D object transformation API.",
    areas: ["3D", "Web Dev"],
    href: "https://example.com/metamorph",
    image: MM,
  },  
  {
    title: "LoopStitch",
    description: "Automated code review assistant.",
    areas: ["DevTools", "Automation"],
    href: "https://example.com/loopstitch",
    image: LS,
  },
  {
    title: "SonicNest",
    description: "Sound editing suite for creators.",
    areas: ["Sound Design", "Creator Tools"],
    href: "https://example.com/sonicnest",
    image: SN,
  },
  {
    title: "MetaMorph",
    description: "3D object transformation API.",
    areas: ["3D", "Web Dev"],
    href: "https://example.com/metamorph",
    image: MM,
  },  
  {
    title: "LoopStitch",
    description: "Automated code review assistant.",
    areas: ["DevTools", "Automation"],
    href: "https://example.com/loopstitch",
    image: LS,
  },
  {
    title: "SonicNest",
    description: "Sound editing suite for creators.",
    areas: ["Sound Design", "Creator Tools"],
    href: "https://example.com/sonicnest",
    image: SN,
  },
  {
    title: "MetaMorph",
    description: "3D object transformation API.",
    areas: ["3D", "Web Dev"],
    href: "https://example.com/metamorph",
    image: MM,
  },
];


const ITEMS_PER_LOAD = 4;

const PaginationPage = () => {
  const [visibleCards, setVisibleCards] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);
  
  const loadMore = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => Math.min(prev + ITEMS_PER_LOAD, allCards.length));
      setIsLoading(false);
    }, 600);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCards < allCards.length) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );
    
    if (loader.current) {
      observer.observe(loader.current);
    }
    
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [visibleCards]);
  
  return (
    <div className="bg-[#0a0a1a] bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] min-h-screen py-20 px-6 relative">
      <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent text-white">
        More of Our Work
      </h1>
      
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allCards.slice(0, visibleCards).map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 
            hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-lg mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10 " />
              <img
                src={item.image || "/assets/photos/fallback.png"}
                alt={`Image for ${item.title}`}
                className="h-90 w-full object-cover transform hover:scale-110 transition-transform duration-500 "
              />
            </div>
            
            <div className="mt-3 text-white">
              <h2 className="text-xl text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
                {item.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {item.areas.map((area, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 text-purple-200"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-700 my-4"></div>
              
              <div className="mt-5 flex justify-around items-center gap-16">
              <p className="text-gray-300 mt-2 text-sm ">{item.description}</p>
              <a
                href={item.href}
                className="text-xl text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Project →
              </a>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced bottom gradient */}  
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-900 via-blue-950/90 to-transparent pointer-events-none" />
      
      {visibleCards < allCards.length && (
        <div ref={loader} className="mt-12 mb-6 flex justify-center items-center">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 opacity-20 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <span className="mt-3 text-purple-300 text-sm font-medium">Loading more...</span>
            </div>
          ) : (
            <button 
              onClick={loadMore} 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-md text-white font-medium shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40"
            >
              Load More
            </button>
          )}
        </div>
      )}
      
      {visibleCards >= allCards.length && (
        <div className="mt-12 mb-6 text-center">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-md text-purple-200 border border-purple-500/20">
            ✨ You've seen all our work
          </span>
        </div>
      )}
    </div>
  );
};

export default PaginationPage;