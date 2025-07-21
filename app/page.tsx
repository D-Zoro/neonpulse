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
                  className="cyber-text text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 font-rounded"
                  style={{
                    fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', sans-serif",
                    textShadow: `
                      0 0 10px rgba(168, 85, 247, 0.8),
                      0 0 20px rgba(168, 85, 247, 0.6),
                      0 0 40px rgba(168, 85, 247, 0.4),
                      0 0 80px rgba(168, 85, 247, 0.2)
                    `,
                    filter: 'brightness(1.2)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                >
                  NEON
                    <span className="text-violet-500" style={{
                    textShadow: `
                      0 0 10px rgba(255, 255, 255, 1.0),
                      0 0 20px rgba(255, 255, 255, 0.8),
                      0 0 40px rgba(255, 255, 255, 0.6)
                    `
                    }}>PULSE</span>
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
                  Fullstack developer with root access to chaos  
                  <br />
                  <span className="text-purple-400 cyber-text text-sm">
                  if it compiles, it ships. if not, we blame the OS ;)
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
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-8 z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="flex space-x-8">
                <motion.button
                  className="cyber-panel px-8 py-4 text-violet-300 hover:text-violet-100 transition-colors duration-300 relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                  onClick={() => router.push('/about')}
                >
                  <span className="relative z-10 cyber-text tracking-wider font-bold" style={{
                    textShadow: `
                      0 0 5px rgba(196, 181, 253, 0.8),
                      0 0 10px rgba(196, 181, 253, 0.6),
                      0 0 15px rgba(196, 181, 253, 0.4)
                    `
                  }}>ABOUT.EXE</span>
                  {/* Dynamic underline */}
                  <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  {/* Side glow effects */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.button>
                
                <motion.button
                  className="cyber-panel px-8 py-4 text-violet-300 hover:text-violet-100 transition-colors duration-300 relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                  onClick={() => router.push('/projects')}
                >
                  <span className="relative z-10 cyber-text tracking-wider font-bold" style={{
                    textShadow: `
                      0 0 5px rgba(196, 181, 253, 0.8),
                      0 0 10px rgba(196, 181, 253, 0.6),
                      0 0 15px rgba(196, 181, 253, 0.4)
                    `
                  }}>PROJECTS.DB</span>
                  {/* Dynamic underline */}
                  <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  {/* Side glow effects */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.button>
                
                <motion.button
                  className="cyber-panel px-8 py-4 text-violet-300 hover:text-violet-100 transition-colors duration-300 relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <span className="relative z-10 cyber-text tracking-wider font-bold" style={{
                    textShadow: `
                      0 0 5px rgba(196, 181, 253, 0.8),
                      0 0 10px rgba(196, 181, 253, 0.6),
                      0 0 15px rgba(196, 181, 253, 0.4)
                    `
                  }}>RESUME.ME</span>
                  {/* Dynamic underline */}
                  <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  {/* Side glow effects */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.button>
                
                <motion.button
                  className="cyber-panel px-8 py-4 text-violet-300 hover:text-violet-100 transition-colors duration-300 relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10 cyber-text tracking-wider font-bold" style={{
                    textShadow: `
                      0 0 5px rgba(196, 181, 253, 0.8),
                      0 0 10px rgba(196, 181, 253, 0.6),
                      0 0 15px rgba(196, 181, 253, 0.4)
                    `
                  }}>CONTACT.NET</span>
                  {/* Dynamic underline */}
                  <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  {/* Side glow effects */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-violet-400 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.button>
              </div>
            </motion.div>

            {/* Faint Light Text */}
            <div className="absolute top-4 left-4 text-xs text-white opacity-70">
              portfolio-v.1/Nishanth P Ouseph
            </div>

            {/* Social Links */}
            <div className="absolute top-4 right-4 flex space-x-4 z-50">
              <motion.a
                href="https://www.linkedin.com/in/neonpulse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full border border-purple-700 text-white"
                whileHover={{ rotate: 360 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/D-Zoro"
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
              className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-purple-500/30 "
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