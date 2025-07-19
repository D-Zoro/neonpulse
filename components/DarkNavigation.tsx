'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

interface NavItem {
  title: string;
  route: string;
  position: [number, number, number];
  description: string;
}

const navItems: NavItem[] = [
  { title: "ABOUT", route: "/about", position: [-3.5, 0.5, 0], description: "Profile & Skills" },
  { title: "PROJECTS", route: "/projects", position: [3.5, 0.5, 0], description: "Portfolio Work" },
  { title: "CONTACT", route: "/contact", position: [0, -2, 0], description: "Get In Touch" }
];

function FloatingGlassPanel({ item, onClick }: { item: NavItem; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = item.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + item.position[0]) * 0.08;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      
      // Depth movement on hover
      if (hovered) {
        meshRef.current.position.z = item.position[2] + 0.3;
      } else {
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, item.position[2], 0.1);
      }
    }

    if (glowRef.current) {
      glowRef.current.material.opacity = hovered ? 0.15 : 0.05;
      glowRef.current.position.copy(meshRef.current.position);
    }
  });

  return (
    <group>
      {/* Main glass panel */}
      <mesh
        ref={meshRef}
        position={item.position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2.4, 1.6, 0.1]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          roughness={0}
          metalness={0.1}
          transmission={0.95}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#ffffff"
        />
      </mesh>

      {/* Subtle glow effect */}
      <mesh
        ref={glowRef}
        position={item.position}
      >
        <boxGeometry args={[2.6, 1.8, 0.05]} />
        <meshBasicMaterial
          transparent
          opacity={0.05}
          color="#8b5cf6"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Border frame */}
      <lineSegments position={item.position}>
        <edgesGeometry args={[new THREE.BoxGeometry(2.4, 1.6, 0.1)]} />
        <lineBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={hovered ? 0.4 : 0.1}
        />
      </lineSegments>
    </group>
  );
}

export default function DarkNavigation() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-full h-full relative">
      {/* 3D Floating Panels */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[2, 2, 5]} intensity={0.3} color="#ffffff" />
          <pointLight position={[-3, 3, 3]} intensity={0.2} color="#8b5cf6" />

          {navItems.map((item, index) => (
            <FloatingGlassPanel
              key={index}
              item={item}
              onClick={() => handleNavigation(item.route)}
            />
          ))}
        </Canvas>
      </div>

      {/* 2D Text Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto cursor-pointer group"
            style={{
              left: `${50 + (item.position[0] / 7) * 50}%`,
              top: `${50 - (item.position[1] / 4) * 50}%`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => handleNavigation(item.route)}
          >
            <div className="relative">
              <h3 className="cyber-text text-lg font-semibold text-white mb-1 tracking-wider group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Underline effect */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Minimal HUD Elements */}
      <div className="absolute top-8 left-8 text-gray-500 text-xs cyber-text tracking-wider opacity-50">
        NEURAL.INTERFACE.V2.0
      </div>
      
      <div className="absolute top-8 right-8 flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white opacity-20 rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-8 left-8 text-gray-500 text-xs font-light tracking-wide opacity-30">
        NAVIGATE → INTERACT
      </div>
    </div>
  );
}