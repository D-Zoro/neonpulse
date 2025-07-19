'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DarkBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const ambientSphereRef = useRef<THREE.Mesh>(null);

  // Create sophisticated particle field
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const sizes = [];
    
    for (let i = 0; i < 150; i++) {
      vertices.push(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      
      // Subtle white and purple particles
      const isAccent = Math.random() > 0.85;
      const color = isAccent ? new THREE.Color(0x8b5cf6) : new THREE.Color(0xffffff);
      colors.push(color.r, color.g, color.b);
      sizes.push(isAccent ? 2.5 : 1.0);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003;
      particlesRef.current.rotation.x += 0.0001;
      
      // Very subtle position animation
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.2 + positions[i] * 0.01) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (ambientSphereRef.current) {
      ambientSphereRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group position={[0, 0, -40]}>
      {/* Refined particle field */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={1}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Ambient depth sphere */}
      <mesh ref={ambientSphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[25, 24, 24]} />
        <meshBasicMaterial
          color="#0a0a0f"
          transparent
          opacity={0.015}
          side={THREE.BackSide}
          wireframe
        />
      </mesh>

      {/* Distant light mesh */}
      <mesh position={[0, 0, -20]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}