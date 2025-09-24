import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

// Herb location data with geo-coordinates using CSS custom properties colors
const herbLocations = [
  { name: 'Ashwagandha', lat: 20.5937, lng: 78.9629, color: 'hsl(140, 60%, 50%)', cssColor: 'var(--primary)' }, // India
  { name: 'Turmeric', lat: 10.8505, lng: 76.2711, color: 'hsl(45, 95%, 65%)', cssColor: 'var(--secondary)' }, // Kerala, India
  { name: 'Ginseng', lat: 37.5665, lng: 126.9780, color: 'hsl(0, 75%, 55%)', cssColor: 'var(--destructive)' }, // Korea
  { name: 'Brahmi', lat: 28.7041, lng: 77.1025, color: 'hsl(220, 70%, 45%)', cssColor: 'var(--accent)' }, // Delhi, India
  { name: 'Neem', lat: 13.0827, lng: 80.2707, color: 'hsl(140, 80%, 60%)', cssColor: 'var(--glow-green)' }, // Chennai, India
  { name: 'Tulsi', lat: 26.9124, lng: 75.7873, color: 'hsl(45, 100%, 70%)', cssColor: 'var(--gold-accent)' }, // Rajasthan, India
];

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Rotating globe component
function Globe() {
  const globeRef = useRef(null);
  const sphereRef = useRef(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  const markers = useMemo(() => {
    return herbLocations.map((location, index) => {
      const position = latLngToVector3(location.lat, location.lng, 2.1);
      return (
        <group key={index} position={position}>
          {/* Marker sphere */}
          <Sphere args={[0.03, 16, 16]}>
            <meshStandardMaterial
              color={location.color}
              emissive={location.color}
              emissiveIntensity={0.4}
            />
          </Sphere>

          {/* Pulsing ring with enhanced glow */}
          <Sphere args={[0.05, 16, 16]}>
            <meshBasicMaterial
              color={location.color}
              transparent
              opacity={0.4}
            />
          </Sphere>

          {/* Outer glow ring */}
          <Sphere args={[0.08, 16, 16]}>
            <meshBasicMaterial
              color={location.color}
              transparent
              opacity={0.1}
            />
          </Sphere>

          {/* Label with design system styling */}
          <Html distanceFactor={6} position={[0, 0.1, 0]}>
            <div 
              className="glass-dark text-foreground px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none"
              style={{
                backgroundColor: 'hsl(var(--card) / 0.9)',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border) / 0.3)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.75rem',
                fontWeight: '500',
                borderRadius: '0.375rem',
                padding: '0.25rem 0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {location.name}
            </div>
          </Html>
        </group>
      );
    });
  }, []);

  return (
    <group ref={globeRef}>
      {/* Main globe with design system colors */}
      <Sphere ref={sphereRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="hsl(140, 40%, 15%)" // Dark herb green
          roughness={0.7}
          metalness={0.2}
          transparent
          opacity={0.95}
        />
      </Sphere>

      {/* Inner glow layer */}
      <Sphere args={[1.98, 64, 64]}>
        <meshBasicMaterial
          color="hsl(140, 60%, 25%)" // Primary color
          transparent
          opacity={0.1}
          side={THREE.FrontSide}
        />
      </Sphere>

      {/* Atmosphere glow with primary color */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="hsl(140, 60%, 50%)" // Primary glow
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer atmosphere with secondary color */}
      <Sphere args={[2.1, 64, 64]}>
        <meshBasicMaterial
          color="hsl(45, 95%, 65%)" // Secondary color
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Herb markers */}
      {markers}
    </group>
  );
}

// Enhanced floating particles with design system colors
function Particles() {
  const particlesRef = useRef(null);
  const particleColors = useRef(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    const colors = new Float32Array(300 * 3);
    
    // Define color palette from design system
    const colorPalette = [
      new THREE.Color('hsl(140, 60%, 50%)'), // Primary
      new THREE.Color('hsl(45, 95%, 65%)'),  // Secondary
      new THREE.Color('hsl(220, 70%, 45%)'), // Accent
      new THREE.Color('hsl(140, 80%, 60%)'), // Glow green
    ];
    
    for (let i = 0; i < 300; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.025} 
        vertexColors 
        transparent 
        opacity={0.7}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Background stars
function BackgroundStars() {
  const starsRef = useRef(null);

  const starPositions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[starPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.01} 
        color="hsl(140, 30%, 80%)" 
        transparent 
        opacity={0.3}
      />
    </points>
  );
}

export const HerbalGlobe = () => {
  return (
    <div className="w-full h-full" style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{
          // background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)'
        }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.3} color="hsl(140, 30%, 80%)" />
        
        {/* Main directional light */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          color="hsl(140, 60%, 90%)"
          castShadow
        />
        
        {/* Secondary warm light */}
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.8}
          color="hsl(45, 95%, 75%)" // Secondary color
          distance={20}
        />

        {/* Accent rim light */}
        <pointLight
          position={[5, 0, -10]}
          intensity={0.4}
          color="hsl(220, 70%, 60%)" // Accent color
          distance={15}
        />

        <BackgroundStars />
        <Globe />
        <Particles />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={4}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};