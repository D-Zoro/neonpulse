'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function CyberGrid() {
  const gridRef = useRef();
  
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    
    // Create a large grid
    for (let i = -50; i <= 50; i += 2) {
      for (let j = -50; j <= 50; j += 2) {
        vertices.push(i, -5, j);
        
        // Distance from center for color variation
        const distance = Math.sqrt(i * i + j * j);
        const intensity = Math.max(0, 1 - distance / 50);
        
        colors.push(0.5 + intensity * 0.5, 0.2 + intensity * 0.3, 1);
      }
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={gridRef} geometry={gridGeometry}>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingObjects() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Floating Torus */}
      <Torus position={[8, 2, -5]} args={[1, 0.3, 16, 32]} rotation={[0.5, 0, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Torus>

      {/* Floating Box */}
      <Box position={[-8, -2, -3]} args={[1.5, 1.5, 1.5]} rotation={[0.3, 0.5, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </Box>

      {/* Floating Sphere */}
      <Sphere position={[5, -3, 2]} args={[1]} >
        <meshStandardMaterial
          color="#c084fc"
          emissive="#c084fc"
          emissiveIntensity={0.15}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </group>
  );
}

function CyberParticles() {
  const particlesRef = useRef();

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 2000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      const purple = new THREE.Color(Math.random() > 0.5 ? 0xa855f7 : 0x8b5cf6);
      colors.push(purple.r, purple.g, purple.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function CyberScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#a855f7" />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#a855f7" />
      <pointLight position={[10, -10, -10]} intensity={0.8} color="#8b5cf6" />

      {/* Scene Elements */}
      <CyberGrid />
      <CyberParticles />
      <FloatingObjects />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0118', 20, 100]} />
    </>
  );
}