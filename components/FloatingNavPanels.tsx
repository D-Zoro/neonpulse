'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

interface NavPanel3D {
  position: [number, number, number];
  color: string;
  title: string;
  route: string;
  description: string;
  icon: string;
}

const navPanels: NavPanel3D[] = [
  {
    position: [-3, 0.5, 0],
    color: "#8b5cf6",
    title: "About",
    route: "/about",
    description: "My Story",
    icon: "👤"
  },
  {
    position: [3, 0.5, 0],
    color: "#06b6d4",
    title: "Projects",
    route: "/projects",
    description: "My Work",
    icon: "🎨"
  },
  {
    position: [0, -2.5, 0],
    color: "#ec4899",
    title: "Contact",
    route: "/contact",
    description: "Get in Touch",
    icon: "💌"
  }
];

function ModernPanel({ panel, onClick }: { panel: NavPanel3D; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = panel.position[1] + Math.sin(state.clock.elapsedTime + panel.position[0]) * 0.15;
      // Subtle rotation on hover
      meshRef.current.rotation.y = hovered ? Math.sin(state.clock.elapsedTime * 2) * 0.1 : 0;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <RoundedBox
        ref={meshRef}
        args={[2.2, 1.8, 0.3]}
        radius={0.1}
        smoothness={4}
        position={panel.position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <meshPhysicalMaterial
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={0.2}
          color={panel.color}
          emissive={panel.color}
          emissiveIntensity={hovered ? 0.2 : 0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>

      {/* Glowing rim */}
      <RoundedBox
        args={[2.3, 1.9, 0.05]}
        radius={0.1}
        position={[panel.position[0], panel.position[1], panel.position[2] - 0.15]}
      >
        <meshBasicMaterial
          transparent
          opacity={hovered ? 0.4 : 0.2}
          color={panel.color}
        />
      </RoundedBox>
    </Float>
  );
}

export default function FloatingNavPanels() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-full h-full relative">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
        <spotLight position={[0, 10, 5]} intensity={0.5} color="#ec4899" />

        {navPanels.map((panel, index) => (
          <ModernPanel
            key={index}
            panel={panel}
            onClick={() => handleNavigation(panel.route)}
          />
        ))}
      </Canvas>

      {/* 2D Card Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {navPanels.map((panel, index) => (
          <motion.div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
            style={{
              left: `${50 + (panel.position[0] / 6) * 40}%`,
              top: `${50 - (panel.position[1] / 5) * 40}%`
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation(panel.route)}
          >
            <div className="relative">
              {/* Glass Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-48 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                {/* Icon */}
                <div className="text-4xl mb-3 text-center">{panel.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-medium text-white text-center mb-2 tracking-wide">
                  {panel.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-300 text-center font-light">
                  {panel.description}
                </p>

                {/* Bottom accent */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 rounded-full"
                  style={{ backgroundColor: panel.color }}
                />
              </div>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ 
                  background: `radial-gradient(circle at center, ${panel.color}20 0%, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}