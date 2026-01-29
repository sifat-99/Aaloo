"use client"

import { Canvas } from "@react-three/fiber"
import { WaterScene } from "./water-scene"

export function CanvasWrapper() {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <WaterScene />
            </Canvas>
        </div>
    )
}
