'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CyberScene from '@/components/CyberScene';
import CyberNavigation from '@/components/CyberNavigation';
import CyberLoader from '@/components/CyberLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cyber-dark">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-cyber-dark"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CyberLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 2, 15], fov: 60 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <CyberScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Scan lines overlay */}
      <div className="absolute inset-0 scan-lines opacity-30 pointer-events-none"></div>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <>
            {/* Central Title */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="text-center">
                <motion.h1
                  className="cyber-text text-6xl md:text-8xl lg:text-9xl font-bold text-white neon-glow mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                >
                  NEON
                  <span className="text-purple-400">PULSE</span>
                </motion.h1>
                
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
                </motion.div>
                
                <motion.p
                  className="text-purple-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Digital architect crafting immersive experiences
                  <br />
                  <span className="text-purple-400 cyber-text text-sm">
                    in the intersection of art and technology
                  </span>
                </motion.p>

                {/* Animated dots */}
                <motion.div
                  className="flex justify-center space-x-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-purple-500 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Elements */}
            <CyberNavigation />

            {/* Corner Decorations */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}