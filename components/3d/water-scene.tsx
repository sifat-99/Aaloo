"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { MeshDistortMaterial, GradientTexture, Float, Stars, Sparkles } from "@react-three/drei"
import * as THREE from "three"

export function WaterScene() {
    const { viewport } = useThree()

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#f59e0b" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />

            {/* Background Color */}
            <color attach="background" args={['#f0f9ff']} />

            {/* Stylized Water Surface */}
            <mesh position={[0, -2, -5]} rotation={[-Math.PI / 2.5, 0, 0]}>
                <planeGeometry args={[20, 20, 64, 64]} />
                <MeshDistortMaterial
                    speed={2}
                    distort={0.4}
                    radius={1}
                >
                    <GradientTexture
                        stops={[0, 0.5, 1]} // As many stops as you want
                        colors={['#0ea5e9', '#38bdf8', '#bae6fd']} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                    />
                </MeshDistortMaterial>
            </mesh>

            {/* Floating Elements (Abstract Lamps/Particles) */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sparkles
                    color="#fbbf24"
                    count={50}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.7}
                    noise={0.2}
                />
            </Float>

            {/* Distant Fog for Depth */}
            <fog attach="fog" args={['#f0f9ff', 5, 20]} />
        </>
    )
}
