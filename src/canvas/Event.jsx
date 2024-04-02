import React, { useState, useEffect, forwardRef, useRef, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshReflectorMaterial, Image, Preload, CubeCamera } from '@react-three/drei'
import { EffectComposer, GodRays, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import * as Three from 'three'

const GOLDENRATIO = 1.61803398875

const Floor = () => (
    <mesh position={[0, -5.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={300}
            roughness={0.6}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.6}
        />
    </mesh>
)

const Emitter = forwardRef((props, forwardRef) => {
    const imageRef = useRef()
    const [clicked, setClicked] = useState(false)
    const { width } = useThree((state) => state.viewport)
    const [rnd] = useState(() => Math.random())

    useFrame((state, dt) => {
        // imageRef.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
        if (clicked) {
            easing.damp3(state.camera.position, 1, 10, 2)
        } else {
            easing.damp3(state.camera.position, new Three.Vector3(-10, 0, 10), 2)
        }


    })
    return (
        <group {...props} rotation={[0, -1.3, 0]} onClick={() => {
            setClicked(!clicked)
        }}>
            <mesh ref={forwardRef} scale={[8, GOLDENRATIO * 6, 0.05]}
                position={[-12, -0.2, - 20]}>
                <planeGeometry />
                <Image url={props.url} ref={imageRef} position={[0, 0, 0.1]} />
            </mesh>
        </group>

    )
})

function Screen({url}) {
    const [material, set] = useState()
    return (
        <>
            <Emitter ref={set} url={url}/>
            {material && (
                <EffectComposer disableNormalPass multisampling={8}>
                    <GodRays sun={material} exposure={0.5} decay={0.85} blur />
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} />
                </EffectComposer>
            )}
        </>
    )
}

const EventCanvas = ({url}) => {


    return (

             <Canvas camera={{ position: [-11, 0, 15], fov: 35, near: 1, far: 60 }} style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: 1 }} gl={{ preserveDrawingBuffer: true, antialias: true }}
            frameloop='always'
            dpr={[1, 1.5]}>

            <Suspense>
           
                <ambientLight intensity={0.5} />
                <Floor />
                <Screen url={url}/>
            </Suspense>
            <Preload all />
        </Canvas>
       

    )
}

export default EventCanvas