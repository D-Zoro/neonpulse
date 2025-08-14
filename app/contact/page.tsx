'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CyberScene from '@/components/CyberScene';
import Link from 'next/link';
import { 
  SiGithub, 
  SiLinkedin, 
  SiLeetcode, 
  SiInstagram,
  SiWhatsapp
} from 'react-icons/si';
import { 
  HiMail, 
  HiClock, 
  HiLocationMarker,
  HiPhone
} from 'react-icons/hi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contacter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Server error:', data.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 overflow-y-auto h-screen">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16 pt-16 sm:pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="cyber-text text-3xl sm:text-5xl md:text-7xl font-bold text-white neon-glow mb-4 sm:mb-6">
            CONTACT.NET
          </h1>
          <p className="text-purple-300 mb-6 sm:mb-8 text-sm sm:text-base">Establish secure communication channel</p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto mb-8 sm:mb-16 lg:mb-20">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              {/* Primary Contact */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
                <div className="holographic absolute inset-0 opacity-10"></div>
                
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-2 h-2 bg-green-400 mr-4 animate-pulse"></div>
                    <h2 className="cyber-text text-lg lg:text-xl font-bold text-purple-300">DIRECT.LINE</h2>
                  </div>
                  
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                        <HiMail className="w-3 h-3 lg:w-4 lg:h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="cyber-text text-xs text-purple-400 mb-1">EMAIL.PROTOCOL</div>
                        <div className="text-white font-light text-sm lg:text-base break-all">nishanthpouseph@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                        <HiPhone className="w-3 h-3 lg:w-4 lg:h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="cyber-text text-xs text-purple-400 mb-1">PHONE.LINE</div>
                        <div className="text-white font-light text-sm lg:text-base">+91 9746494606</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                        <HiLocationMarker className="w-3 h-3 lg:w-4 lg:h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="cyber-text text-xs text-purple-400 mb-1">TIME.ZONE</div>
                        <div className="text-white font-light text-sm lg:text-base">UTC+05:30 (IST)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                        <HiClock className="w-3 h-3 lg:w-4 lg:h-4 text-green-400 animate-pulse" />
                      </div>
                      <div>
                        <div className="cyber-text text-xs text-purple-400 mb-1">RESPONSE.TIME</div>
                        <div className="text-white font-light text-sm lg:text-base">{'<'} 24 Hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Section */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-green-500/30 rounded-2xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
                <div className="holographic absolute inset-0 opacity-10"></div>
                
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-2 h-2 bg-green-400 mr-4 animate-pulse"></div>
                    <h3 className="cyber-text text-lg lg:text-xl font-bold text-green-300">WHATSAPP.LINK</h3>
                  </div>
                  
                  <a
                    href="https://wa.me/919986742167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 lg:p-6 bg-green-900/20 border border-green-500/30 rounded-xl hover:border-green-400/60 hover:bg-green-800/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center group-hover:bg-green-400/30 group-hover:border-green-400/70 transition-all duration-300">
                      <SiWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 text-green-400 group-hover:text-green-300" />
                    </div>
                    <div>
                      <div className="cyber-text text-sm lg:text-base font-bold text-green-300 group-hover:text-green-200 transition-colors duration-300">
                        INSTANT.MESSAGE
                      </div>
                      <div className="text-green-400 text-xs lg:text-sm font-light">Click to open WhatsApp</div>
                      <div className="text-green-500 text-xs font-light">+91 9746494606</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Social Networks */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
                <div className="holographic absolute inset-0 opacity-10"></div>
                
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                    <h3 className="cyber-text text-lg lg:text-xl font-bold text-purple-300">NETWORK.LINKS</h3>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      { 
                        name: 'GITHUB', 
                        url: 'https://github.com/D-Zoro', 
                        status: 'ACTIVE', 
                        color: 'green',
                        icon: <SiGithub className="w-5 h-5 lg:w-6 lg:h-6" />,
                        iconColor: 'text-gray-300'
                      },
                      { 
                        name: 'LINKEDIN', 
                        url: 'https://www.linkedin.com/in/neonpulse/', 
                        status: 'ACTIVE', 
                        color: 'green',
                        icon: <SiLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />,
                        iconColor: 'text-blue-400'
                      },
                      { 
                        name: 'LEETCODE', 
                        url: 'https://leetcode.com/u/neon_pulse/', 
                        status: 'INACTIVE', 
                        color: 'purple',
                        icon: <SiLeetcode className="w-5 h-5 lg:w-6 lg:h-6" />,
                        iconColor: 'text-yellow-400'
                      },
                      { 
                        name: 'INSTAGRAM', 
                        url: 'https://www.instagram.com/nish_ain.t/', 
                        status: 'LIMITED', 
                        color: 'yellow',
                        icon: <SiInstagram className="w-5 h-5 lg:w-6 lg:h-6" />,
                        iconColor: 'text-pink-400'
                      }
                    ].map((link) => (
                      <div key={link.name} className="group">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 lg:p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:bg-purple-800/30 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className={`${link.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                              {link.icon}
                            </div>
                            <span className="text-white group-hover:text-purple-200 transition-colors duration-300 font-light tracking-wide text-sm lg:text-base">
                              {link.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full animate-pulse ${
                              link.color === 'green' ? 'bg-green-400' :
                              link.color === 'blue' ? 'bg-blue-400' :
                              link.color === 'purple' ? 'bg-purple-400' : 'bg-yellow-400'
                            }`}></div>
                            <span className="cyber-text text-xs text-purple-500">{link.status}</span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="relative overflow-hidden h-fit"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10 p-6 lg:p-8">
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                  <h2 className="cyber-text text-lg lg:text-xl font-bold text-purple-300">MESSAGE.INTERFACE</h2>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 lg:py-20"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-green-400 mx-auto mb-4 lg:mb-6 flex items-center justify-center relative">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-400 animate-pulse"></div>
                      <div className="absolute inset-0 border-green-400 animate-ping"></div>
                    </div>
                    <h3 className="cyber-text text-xl lg:text-2xl font-bold text-green-400 mb-3 lg:mb-4 neon-glow">
                      TRANSMISSION.COMPLETE
                    </h3>
                    <p className="text-purple-300 mb-1 text-sm lg:text-base">Message successfully transmitted</p>
                    <p className="text-purple-400 text-xs lg:text-sm mb-4 lg:mb-6">Response incoming within 24 hours</p>
                    <motion.button
                      onClick={() => setSubmitStatus('idle')}
                      className="cyber-text text-sm lg:text-base text-purple-400 hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ← SEND.ANOTHER.MESSAGE
                    </motion.button>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 lg:py-20"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-red-400 mx-auto mb-4 lg:mb-6 flex items-center justify-center relative">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-400 animate-pulse"></div>
                      <div className="absolute inset-0 border-red-400 animate-ping"></div>
                    </div>
                    <h3 className="cyber-text text-xl lg:text-2xl font-bold text-red-400 mb-3 lg:mb-4 neon-glow">
                      TRANSMISSION.FAILED
                    </h3>
                    <p className="text-purple-300 mb-4 text-sm lg:text-base">Unable to establish secure connection</p>
                    <motion.button
                      onClick={() => setSubmitStatus('idle')}
                      className="cyber-text text-sm lg:text-base text-purple-400 hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ← RETRY.TRANSMISSION
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-2 lg:mb-3">
                          USER.IDENTITY
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border border-purple-500/30 px-3 py-3 lg:px-4 lg:py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm lg:text-base"
                          placeholder="Enter your designation"
                          required
                        />
                      </div>
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-2 lg:mb-3">
                          COMM.CHANNEL
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border border-purple-500/30 px-3 py-3 lg:px-4 lg:py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm lg:text-base"
                          placeholder="neural@interface.net"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-2 lg:mb-3">
                        MESSAGE.HEADER
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border border-purple-500/30 px-3 py-3 lg:px-4 lg:py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm lg:text-base"
                        placeholder="Transmission subject protocol"
                      />
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-2 lg:mb-3">
                        DATA.PAYLOAD
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-transparent border border-purple-500/30 px-3 py-3 lg:px-4 lg:py-4 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none font-light text-sm lg:text-base"
                        placeholder="Transmit your message through the neural network..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 border border-purple-400 rounded-lg py-3 lg:py-4 px-4 lg:px-6 text-white cyber-text text-sm lg:text-base font-bold hover:from-purple-500 hover:to-purple-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                      whileTap={{ scale: 0.98 }}
                      style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                      }}
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
            </motion.div>
          </div>

          {/* Mobile/Tablet Layout - Stacked */}
          <div className="lg:hidden space-y-6 sm:space-y-8">
            {/* Contact Info - Mobile (First) */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-green-400 mr-4 animate-pulse"></div>
                  <h2 className="cyber-text text-lg sm:text-xl font-bold text-purple-300">DIRECT.LINE</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                      <HiMail className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">EMAIL.PROTOCOL</div>
                      <div className="text-white font-light text-sm sm:text-base break-all">nishu142k@gmail.com@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                      <HiPhone className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">PHONE.LINE</div>
                      <div className="text-white font-light text-sm sm:text-base">+91 9986742167</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                      <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">TIME.ZONE</div>
                      <div className="text-white font-light text-sm sm:text-base">UTC+05:30 (IST)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-purple-500/50 flex items-center justify-center mt-1 rounded-lg">
                      <HiClock className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
                    </div>
                    <div>
                      <div className="cyber-text text-xs text-purple-400 mb-1">RESPONSE.TIME</div>
                      <div className="text-white font-light text-sm sm:text-base">{'<'} 24 Hours</div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Section - Mobile */}
                <div className="border-t border-purple-500/30 pt-4 sm:pt-6 mb-6 sm:mb-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-2 h-2 bg-green-400 mr-4 animate-pulse"></div>
                    <h3 className="cyber-text text-base sm:text-lg font-bold text-green-300">WHATSAPP.LINK</h3>
                  </div>
                  
                  <a
                    href="https://wa.me/9986742167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-900/20 border border-green-500/30 rounded-xl hover:border-green-400/60 hover:bg-green-800/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 group-hover:border-green-400/70 transition-all duration-300">
                      <SiWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300" />
                    </div>
                    <div>
                      <div className="cyber-text text-sm sm:text-base font-bold text-green-300 group-hover:text-green-200 transition-colors duration-300">
                        INSTANT.MESSAGE
                      </div>
                      <div className="text-green-400 text-xs sm:text-sm font-light">Tap to open WhatsApp</div>
                    </div>
                  </a>
                </div>

                {/* Social Networks - Mobile */}
                <div className="border-t border-purple-500/30 pt-4 sm:pt-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                    <h3 className="cyber-text text-base sm:text-lg font-bold text-purple-300">NETWORK.LINKS</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {[
                      { 
                        name: 'GITHUB', 
                        url: 'https://github.com/D-Zoro', 
                        status: 'ACTIVE', 
                        color: 'green',
                        icon: <SiGithub className="w-4 h-4 sm:w-5 sm:h-5" />,
                        iconColor: 'text-gray-300'
                      },
                      { 
                        name: 'LINKEDIN', 
                        url: 'https://www.linkedin.com/in/neonpulse/', 
                        status: 'ACTIVE', 
                        color: 'green',
                        icon: <SiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                        iconColor: 'text-blue-400'
                      },
                      { 
                        name: 'LEETCODE', 
                        url: 'https://leetcode.com/u/neon_pulse/', 
                        status: 'INACTIVE', 
                        color: 'purple',
                        icon: <SiLeetcode className="w-4 h-4 sm:w-5 sm:h-5" />,
                        iconColor: 'text-yellow-400'
                      },
                      { 
                        name: 'INSTAGRAM', 
                        url: 'https://www.instagram.com/nish_ain.t/', 
                        status: 'LIMITED', 
                        color: 'yellow',
                        icon: <SiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                        iconColor: 'text-pink-400'
                      }
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 sm:p-3 border border-purple-500/30 hover:border-purple-400/60 bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300 group rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`${link.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                            {link.icon}
                          </div>
                          <span className="text-white group-hover:text-purple-200 transition-colors duration-300 font-light text-xs sm:text-sm">
                            {link.name}
                          </span>
                        </div>
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
                          link.color === 'green' ? 'bg-green-400' :
                          link.color === 'blue' ? 'bg-blue-400' :
                          link.color === 'purple' ? 'bg-purple-400' : 'bg-yellow-400'
                        }`}></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Mobile (Last) */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
              <div className="holographic absolute inset-0 opacity-10"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-purple-500 mr-4 animate-pulse"></div>
                  <h2 className="cyber-text text-lg sm:text-xl font-bold text-purple-300">MESSAGE.INTERFACE</h2>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 sm:py-16"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-green-400 mx-auto mb-4 sm:mb-6 flex items-center justify-center relative">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 animate-pulse"></div>
                      <div className="absolute inset-0 border-green-400 animate-ping"></div>
                    </div>
                    <h3 className="cyber-text text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4 neon-glow">
                      TRANSMISSION.COMPLETE
                    </h3>
                    <p className="text-purple-300 mb-1 text-sm sm:text-base">Message successfully transmitted</p>
                    <p className="text-purple-400 text-xs sm:text-sm mb-4 sm:mb-6">Response incoming within 24 hours</p>
                    <motion.button
                      onClick={() => setSubmitStatus('idle')}
                      className="cyber-text text-sm sm:text-base text-purple-400 hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ← SEND.ANOTHER.MESSAGE
                    </motion.button>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 sm:py-16"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-red-400 mx-auto mb-4 sm:mb-6 flex items-center justify-center relative">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-400 animate-pulse"></div>
                      <div className="absolute inset-0 border-red-400 animate-ping"></div>
                    </div>
                    <h3 className="cyber-text text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4 neon-glow">
                      TRANSMISSION.FAILED
                    </h3>
                    <p className="text-purple-300 mb-4 text-sm sm:text-base">Unable to establish secure connection</p>
                    <motion.button
                      onClick={() => setSubmitStatus('idle')}
                      className="cyber-text text-sm sm:text-base text-purple-400 hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ← RETRY.TRANSMISSION
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-2">
                          USER.IDENTITY
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border border-purple-500/30 px-3 py-3 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm"
                          placeholder="Enter your designation"
                          required
                        />
                      </div>
                      <div>
                        <label className="block cyber-text text-xs text-purple-400 mb-2">
                          COMM.CHANNEL
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border border-purple-500/30 px-3 py-3 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm"
                          placeholder="neural@interface.net"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-2">
                        MESSAGE.HEADER
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border border-purple-500/30 px-3 py-3 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 font-light text-sm"
                        placeholder="Transmission subject protocol"
                      />
                    </div>

                    <div>
                      <label className="block cyber-text text-xs text-purple-400 mb-2">
                        DATA.PAYLOAD
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-transparent border border-purple-500/30 px-3 py-3 text-white placeholder-purple-500/50 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none font-light text-sm"
                        placeholder="Transmit your message through the neural network..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 border border-purple-400 rounded-lg py-3 px-4 text-white cyber-text text-sm font-bold hover:from-purple-500 hover:to-purple-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                      whileTap={{ scale: 0.98 }}
                      style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                      }}
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
            </motion.div>
          </div>

          {/* Back Navigation */}
          <motion.div
            className="mb-8 sm:mb-12 flex mt-5 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link href="/">
              <div className="relative cursor-pointer group">
                <span className="cyber-text text-base sm:text-lg text-purple-300 group-hover:text-purple-100 transition-colors duration-300 font-semibold tracking-wider">
                  ← RETURN.HOME
                </span>
                {/* Dynamic underline */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                {/* Glowing dot */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
