'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const gridRef = useRef<THREE.LineSegments>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create grid geometry
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 50;
    const divisions = 50;

    for (let i = 0; i <= divisions; i++) {
      const x = (i / divisions) * size - size / 2;
      vertices.push(x, -size / 2, 0);
      vertices.push(x, size / 2, 0);
      
      vertices.push(-size / 2, x, 0);
      vertices.push(size / 2, x, 0);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  // Create particle system
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    
    for (let i = 0; i < 1000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      
      // Mix of purple and cyan colors
      const color = Math.random() > 0.5 
        ? new THREE.Color(0x8b5cf6) 
        : new THREE.Color(0x06b6d4);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      
      // Animate particle positions
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, -20]}>
      {/* Animated Grid */}
      <lineSegments ref={gridRef} geometry={gridGeometry}>
        <lineBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Floating Particles */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={0.5}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Additional ambient glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshBasicMaterial
          color="#1a1a2e"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}