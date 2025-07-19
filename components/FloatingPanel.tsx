'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingPanel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Glassy Panel Mesh */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[4, 3]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.1}
          roughness={0}
          metalness={0.1}
          transmission={0.9}
          thickness={0.1}
          color={hovered ? "#8b5cf6" : "#6366f1"}
        />
      </mesh>

      {/* Glowing Border */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[4.1, 3.1]} />
        <meshBasicMaterial
          transparent
          opacity={0.3}
          color="#8b5cf6"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* HTML Content */}
      <Html
        center
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{
          pointerEvents: 'auto',
        }}
      >
        <div className="w-80 h-60 p-6 backdrop-blur-sm bg-black/20 border border-violet-500/30 rounded-lg shadow-lg shadow-violet-500/20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              NEURAL LINK
            </h2>
            <p className="text-sm text-violet-300 font-mono">
              [ QUANTUM INTERFACE ACTIVE ]
            </p>
            
            <div className="space-y-3 mt-6">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-mono text-sm rounded border border-violet-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30">
                INITIALIZE PROTOCOL
              </button>
              
              <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-sm rounded border border-cyan-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30">
                ACCESS DATABASE
              </button>
              
              <button className="w-full py-2 px-4 border border-violet-400/50 text-violet-300 hover:text-white hover:bg-violet-600/20 font-mono text-sm rounded transition-all duration-200">
                SYSTEM STATUS
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t border-violet-500/30">
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>CPU: 94.7%</span>
                <span>MEM: 87.2%</span>
                <span>NET: SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}