'use client';

import { useState, useEffect } from 'react';

export default function CyberLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 100 : prev + 1.5);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 holographic"></div>
      <div className="absolute inset-0 scan-lines"></div>
      
      <div className="text-center relative z-10">
        {/* Main loader */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer ring */}
            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-4 border-2 border-purple-400/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
            
            {/* Inner ring */}
            <div className="absolute inset-8 border-2 border-purple-300/70 rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="cyber-text text-3xl font-bold text-white neon-glow mb-4">
          INITIALIZING
        </h1>
        <p className="text-purple-300 mb-8 font-light">
          Neural network loading...
        </p>
        
        {/* Progress bar */}
        <div className="w-80 h-1 bg-purple-900/50 mx-auto relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 w-4 h-full bg-white/80 animate-pulse"></div>
          </div>
        </div>
        
        <p className="cyber-text text-sm text-purple-400 mt-4">
          {Math.round(progress)}% COMPLETE
        </p>
      </div>
    </div>
  );
}