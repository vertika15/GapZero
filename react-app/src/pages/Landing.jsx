import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, PerspectiveCamera, TorusKnot } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Navbar } from '../components/layout/Navbar'

function AnimatedTorus() {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <torusKnotGeometry args={[1, 0.3, 256, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#00f3ff" : "#22D3EE"} 
          emissive={hovered ? "#bf00ff" : "#3B82F6"}
          emissiveIntensity={1.5} 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#bf00ff" />
      
      <AnimatedTorus />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050B14] to-[#0B1020]">
      <Navbar />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-electric-blue/20 blur-3xl rounded-full" />
          <h1 className="relative text-6xl md:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-electric-cyan via-white to-electric-violet bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Gap Zero
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mb-10 leading-relaxed"
        >
          Bridge your learning gaps with an <span className="text-electric-cyan font-semibold">AI-powered</span> reverse learning path.
          <br className="hidden md:block" />
          From your goal back to the fundamentals — no pressure, just progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center"
        >
          <Link 
            to="/signup" 
            className="px-8 py-4 rounded-full bg-electric-blue text-black font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
          >
            Start Learning
          </Link>
          <Link 
            to="/dashboard/student" 
            className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            View Dashboard
          </Link>
        </motion.div>
        
        {/* Stats / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:gap-16 text-white/40 text-sm font-medium"
        >
          <div className="flex flex-col items-center">
            <span className="text-electric-cyan text-xl font-bold">20+</span>
            <span>Modules</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-electric-violet text-xl font-bold">AI</span>
            <span>Powered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-electric-blue text-xl font-bold">100%</span>
            <span>Adaptive</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
