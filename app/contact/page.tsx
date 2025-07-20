'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate transmission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <CyberScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Scan lines overlay */}
      <div className="absolute inset-0 scan-lines opacity-15"></div>

      {/* Content */}
      <div className="relative z-10 p-8 overflow-y-auto h-screen">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="cyber-text text-5xl md:text-7xl font-bold text-white neon-glow mb-6">
            CONTACT.NET
          </h1>
          <p className="text-purple-300 mb-8">Establish secure communication channel</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 mb-20">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Primary Contact */}
            <div className="cyber-panel p-8 relative overflow-hidden">
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-green-400 mr-4 animate-pulse"></div>
                  <h2 className="cyber-text text-xl font-bold text-purple-300">DIRECT.LINE</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 border border-purple-500/50 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-purple-400"></div>
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">EMAIL.PROTOCOL</div>
                      <div className="text-white font-light">hello@neonpulse.dev</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 border border-purple-500/50 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-blue-400"></div>
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">TIME.ZONE</div>
                      <div className="text-white font-light">UTC-5 (EST)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 border border-purple-500/50 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">RESPONSE.TIME</div>
                      <div className="text-white font-light">{'<'} 24 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="cyber-panel p-8 relative overflow-hidden">
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                  <h3 className="cyber-text text-xl font-bold text-purple-300">NETWORK.LINKS</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'GITHUB', url: '#', status: 'ACTIVE', color: 'green' },
                    { name: 'LINKEDIN', url: '#', status: 'ACTIVE', color: 'blue' },
                    { name: 'DRIBBBLE', url: '#', status: 'ACTIVE', color: 'purple' },
                    { name: 'BEHANCE', url: '#', status: 'LIMITED', color: 'yellow' }
                  ].map((link) => (
                    <div key={link.name} className="flex items-center justify-between group">
                      <a
                        href={link.url}
                        className="text-white hover:text-purple-300 transition-colors duration-300 font-light tracking-wide group-hover:neon-glow"
                      >
                        {link.name}
                      </a>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          link.color === 'green' ? 'bg-green-400' :
                          link.color === 'blue' ? 'bg-blue-400' :
                          link.color === 'purple' ? 'bg-purple-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="cyber-text text-xs text-purple-500">{link.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="cyber-panel p-8 relative overflow-hidden">
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                  <h2 className="cyber-text text-xl font-bold text-purple-300">MESSAGE.INTERFACE</h2>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 border-2 border-green-400 mx-auto mb-6 flex items-center justify-center relative">
                      <div className="w-8 h-8 bg-green-400 animate-pulse"></div>
                      <div className="absolute inset-0 border-green-400 animate-ping"></div>
                    </div>
                    <h3 className="cyber-text text-2xl font-bold text-green-400 mb-4 neon-glow">
                      TRANSMISSION.COMPLETE
                    </h3>
                    <p className="text-purple-300">Message successfully transmitted to neural network</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-3">
                          USER.IDENTITY
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full bg-transparent border border-purple-500/30 px-4 py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light"
                          placeholder="Enter your designation"
                          required
                        />
                      </div>
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-3">
                          COMM.CHANNEL
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-transparent border border-purple-500/30 px-4 py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light"
                          placeholder="neural@interface.net"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-3">
                        MESSAGE.HEADER
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full bg-transparent border border-purple-500/30 px-4 py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Transmission subject protocol"
                        required
                      />
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-3">
                        DATA.PAYLOAD
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="w-full bg-transparent border border-purple-500/30 px-4 py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none font-light"
                        placeholder="Transmit your message through the neural network..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cyber-panel py-4 px-6 text-white cyber-text text-sm hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-4 h-4 border border-purple-400 border-t-transparent animate-spin rounded-full"></div>
                          <span>TRANSMITTING...</span>
                        </div>
                      ) : (
                        'INITIATE.TRANSMISSION'
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Navigation */}
        <motion.div
          className="fixed bottom-8 left-8 z-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link href="/">
            <div className="relative cursor-pointer group">
              <span className="cyber-text text-lg text-purple-300 group-hover:text-purple-100 transition-colors duration-300 font-semibold tracking-wider">
                ← RETURN.HOME
              </span>
              {/* Dynamic underline */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              {/* Glowing dot */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}