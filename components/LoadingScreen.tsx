'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 100 : prev + 2);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <div className="text-center max-w-md">
        <div className="relative mb-16">
          {/* Geometric loader */}
          <div className="w-32 h-32 mx-auto border border-white/10 relative">
            <div className="absolute inset-2 border-t border-purple-400 animate-spin"></div>
            <div className="absolute inset-4 border-l border-white/30 animate-pulse"></div>
            <div className="absolute inset-6 border-b border-purple-400/50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          </div>
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20"></div>
        </div>
        
        <h1 className="cyber-text text-2xl font-semibold text-white mb-3 tracking-wider">
          INITIALIZING
        </h1>
        <p className="text-sm text-gray-400 mb-16 font-light tracking-wide">
          Neural interface loading...
        </p>
        
        <div className="w-full bg-gray-800/30 h-px mb-4 relative overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-400/80 to-white/60 h-px transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 w-2 h-px bg-white shadow-lg shadow-white/50"></div>
          </div>
        </div>
        
        <p className="cyber-text text-xs text-gray-500 font-light tracking-widest">
          {progress.toFixed(0)}% COMPLETE
        </p>
      </div>
    </div>
  );
}