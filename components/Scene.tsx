'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DarkBackground from './DarkBackground';

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.05} />
        <pointLight position={[10, 10, 10]} intensity={0.2} color="#7c3aed" />
        <pointLight position={[-10, -10, -10]} intensity={0.1} color="#5b21b6" />
        
        <DarkBackground />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.1}
        />
      </Canvas>
    </div>
  );
}