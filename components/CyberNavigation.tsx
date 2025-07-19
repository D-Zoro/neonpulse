'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { title: 'About', route: '/about', position: { top: '20%', left: '15%' } },
  { title: 'Projects', route: '/projects', position: { top: '60%', right: '15%' } },
  { title: 'Contact', route: '/contact', position: { bottom: '20%', left: '50%', transform: 'translateX(-50%)' } }
];

export default function CyberNavigation() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      {navItems.map((item, index) => (
        <motion.div
          key={item.title}
          className="absolute pointer-events-auto"
          style={item.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
        >
          <div 
            className="cyber-panel px-8 py-4 cursor-pointer group relative overflow-hidden"
            onMouseEnter={() => setHoveredItem(item.title)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => router.push(item.route)}
          >
            {/* Holographic background effect */}
            <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main content */}
            <div className="relative z-10">
              <h2 className="cyber-text text-xl font-bold text-purple-300 group-hover:text-white transition-colors duration-300 neon-glow">
                {item.title}
              </h2>
              
              {/* Animated underline */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 group-hover:w-full transition-all duration-500 mt-2"></div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      ))}

      {/* Cyber HUD Elements */}
      <div className="absolute top-8 left-8 cyber-text text-xs text-purple-400 opacity-70">
        NEURAL.NET.V2.1.7
      </div>
      
      <div className="absolute top-8 right-8 cyber-text text-xs text-purple-400 opacity-70">
        CONNECTION: SECURE
      </div>

      <div className="absolute bottom-8 left-8 cyber-text text-xs text-purple-400 opacity-70">
        STATUS: ONLINE
      </div>

      <div className="absolute bottom-8 right-8 cyber-text text-xs text-purple-400 opacity-70">
        {new Date().toLocaleTimeString()}
      </div>
    </>
  );
}