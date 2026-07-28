import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei'
import { Suspense } from 'react'

function ConceptShoe() {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <group rotation={[0.2, 0, 0.1]} scale={1.2}>
        <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.8, 2.1, 0.25, 64]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.35, 0]} castShadow>
          <torusGeometry args={[1.65, 0.12, 16, 100]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={2.5} roughness={0.1} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.4, 0]} castShadow>
          <boxGeometry args={[2.6, 1.1, 1.6]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.05} metalness={0.1} transmission={0.95} thickness={0.5} ior={1.5} clearcoat={1} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={4} />
        </mesh>
        <Float speed={3} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[1.6, 1.1, 0.6]} scale={0.25}>
            <octahedronGeometry />
            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} metalness={1} roughness={0} />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={3} floatIntensity={1.5}>
          <mesh position={[-1.4, 0.9, -0.9]} scale={0.18}>
            <octahedronGeometry />
            <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={3} metalness={1} roughness={0} />
          </mesh>
        </Float>
      </group>
    </Float>
  )
}

export default function ShoeScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 40 }} className="!absolute !inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -5, -10]} intensity={0.8} color="#4444ff" />
        <ConceptShoe />
        <ContactShadows position={[0, -1.6, 0]} opacity={0.8} scale={12} blur={2.5} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      </Suspense>
    </Canvas>
  )
}
