'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import CyberScene from '@/components/CyberScene';
import CyberLoader from '@/components/CyberLoader';
import { useRouter } from 'next/navigation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const group = useRef();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [-100, 100], [-10, 10]);
  const y = useTransform(mouseY, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

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

            {/* Navigation Links */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6 z-50">
              <div className="flex justify-center space-x-16">
                <motion.button
                  className="w-44 h-12 text-lg font-bold text-purple-300 border border-purple-500/30 rounded-lg transition-all duration-150 neon-glow hacker-text bg-gradient-to-t from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400"
                  whileHover={{ scale: 1.2, boxShadow: "0px 0px 12px 3px #8b5cf6" }}
                  onClick={() => router.push('/about')}
                >
                  About
                </motion.button>
                <motion.button
                  className="w-44 h-12 text-lg font-bold text-purple-300 border border-purple-500/30 rounded-lg transition-all duration-150 neon-glow hacker-text bg-gradient-to-t from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400"
                  whileHover={{ scale: 1.2, boxShadow: "0px 0px 12px 3px #8b5cf6" }}
                  onClick={() => router.push('/projects')}
                >
                  Projects
                </motion.button>
              </div>
              <motion.button
                className="w-44 h-12 text-lg font-bold text-purple-300 border border-purple-500/30 rounded-lg transition-all duration-150 neon-glow hacker-text bg-gradient-to-t from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400"
                whileHover={{ scale: 1.2, boxShadow: "0px 0px 12px 3px #8b5cf6" }}
                onClick={() => router.push('/contact')}
              >
                Contact
              </motion.button>
            </div>

            {/* Faint Light Text */}
            <div className="absolute top-4 left-4 text-xs text-purple-500 opacity-70">
              portfolio-v.1/D-Zoro
            </div>

            {/* Social Links */}
            <div className="absolute top-4 right-4 flex space-x-4 z-50">
              <motion.a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full border border-purple-700 text-white"
                whileHover={{ rotate: 360 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full border border-purple-700 text-white"
                whileHover={{ rotate: 360 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
            </div>

            {/* Return Home Button */}
            <motion.button
              className="px-6 py-3 text-lg font-bold text-purple-300 border border-purple-500/30 rounded-lg hover:text-white hover:border-purple-400 transition-all duration-300 neon-glow hacker-text mt-12"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 2px #8b5cf6" }}
              onClick={() => router.push('/')}
            >
              Return Home
            </motion.button>

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