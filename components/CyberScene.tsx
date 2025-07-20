'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, Sphere, Torus, Box, OrbitControls } from '@react-three/drei';
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
  const { mouse, camera } = useThree();
  // Colors for all shapes (same as first three)
  const colors = ['#a855f7', '#8b5cf6', '#c084fc'];

  // List of shapes and positions
  const shapes = [
    { type: 'torus', position: [8, 2, -5], args: [1, 0.3, 16, 32], rotation: [0.5, 0, 0] },
    { type: 'box', position: [-8, -2, -3], args: [1.5, 1.5, 1.5], rotation: [0.3, 0.5, 0] },
    { type: 'sphere', position: [5, -3, 2], args: [1] },
    { type: 'torus', position: [-6, 3, 4], args: [0.8, 0.22, 16, 32], rotation: [0.2, 0.7, 0] },
    { type: 'box', position: [7, -4, 5], args: [1, 1, 1], rotation: [0.1, 0.2, 0.3] },
    { type: 'sphere', position: [-5, 4, -2], args: [0.8] },
    { type: 'torus', position: [0, 6, -6], args: [0.7, 0.18, 16, 32], rotation: [0.8, 0.2, 0] },
    { type: 'box', position: [0, -7, 3], args: [0.8, 0.8, 0.8], rotation: [0.2, 0.4, 0.1] },
    { type: 'sphere', position: [3, 7, -4], args: [0.7] },
    { type: 'torus', position: [-10, 5, -8], args: [0.9, 0.25, 16, 32], rotation: [0.4, 0.6, 0] },
    { type: 'box', position: [10, -5, 6], args: [1.2, 1.2, 1.2], rotation: [0.3, 0.3, 0.2] },
    { type: 'sphere', position: [-7, 8, -3], args: [0.6] },
  ];

  // Store random movement offsets for each shape
  const [offsets] = useState(() => Array.from({ length: shapes.length }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
    speed: 0.5 + Math.random() * 0.5
  })));

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    group.current?.children?.forEach((child, idx) => {
      const t = state.clock.elapsedTime * offsets[idx].speed;
      let x = shapes[idx].position[0] + Math.sin(t + offsets[idx].x) * 1.5;
      let y = shapes[idx].position[1] + Math.cos(t + offsets[idx].y) * 1.5;
      let z = shapes[idx].position[2] + Math.sin(t + offsets[idx].z) * 1.5;

      // Repel from cursor if close
      const vector = new THREE.Vector3();
      vector.set(
        (mouse.x) * camera.aspect * camera.fov / 60,
        (mouse.y) * camera.fov / 60,
        0
      );
      const worldMouse = vector.unproject(camera);
      const objPos = new THREE.Vector3(x, y, z);
      const dist = objPos.distanceTo(worldMouse);
      if (dist < 3) {
        const repel = objPos.clone().sub(worldMouse).normalize().multiplyScalar(3 - dist);
        x += repel.x;
        y += repel.y;
        z += repel.z;
      }

      child.position.x = x;
      child.position.y = y;
      child.position.z = z;
    });
  });

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((child, idx) => {
        const t = idx * 0.1;
        const x = Math.sin(mouse.x * Math.PI + t) * 2;
        const y = Math.cos(mouse.y * Math.PI + t) * 2;
        child.position.x += (x - child.position.x) * 0.05;
        child.position.y += (y - child.position.y) * 0.05;
      });
    }
  });

  // Helper to render a shape with interactivity
  function renderShape(type, props, idx) {
    const color = colors[idx % colors.length];
    const scale = 1;
    const emissiveIntensity = 0.18;
    const commonProps = {
      scale,
      ...props,
    };
    switch (type) {
      case 'torus':
        return (
          <Torus key={idx} {...commonProps}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissiveIntensity} transparent opacity={0.8} />
          </Torus>
        );
      case 'box':
        return (
          <Box key={idx} {...commonProps}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissiveIntensity} transparent opacity={0.7} />
          </Box>
        );
      case 'sphere':
        return (
          <Sphere key={idx} {...commonProps}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissiveIntensity} transparent opacity={0.9} />
          </Sphere>
        );
      default:
        return null;
    }
  }

  return (
    <group ref={group}>
      {shapes.map((shape, idx) =>
        renderShape(shape.type, { position: shape.position, args: shape.args, rotation: shape.rotation }, idx)
      )}
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
      <OrbitControls enablePan={false} enableZoom={false} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0118', 20, 100]} />
    </>
  );
}