import React from "react";
import { useGLTF , Float, Preload, GradientTexture} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const LogoModel = (props) => {
    const { nodes, materials } = useGLTF('./cute/logo-transformed.glb')

    return (
        <Float speed={2.5} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]}
        scale={8} position={[0, 0, 0]} rotation={[0, 1, 0]}>
             <mesh geometry={nodes['Node_#0'].geometry} material={nodes['Node_#0'].material} position={[0, 0.068, 0.085]} scale={[0.514, 0.61, 0.305]} >
             <meshBasicMaterial>
    <GradientTexture
      stops={[0, 1]} // As many stops as you want
      colors={['#af00ff', '#2a004e']} // Colors need to match the number of stops
      size={1024} // Size is optional, default = 1024
    />
    </meshBasicMaterial>
             </mesh>
      <mesh geometry={nodes['Node_#1'].geometry} material={nodes['Node_#1'].material} position={[-0.003, -0.256, 0.075]} scale={[0.231, 0.047, 0.336]} />
      <mesh geometry={nodes['Node_#2'].geometry} material={nodes['Node_#2'].material} position={[0.001, -0.302, 0.078]} scale={[0.121, 0.067, 0.116]} />
      <mesh geometry={nodes['Node_#3'].geometry} material={nodes['Node_#3'].material} position={[-0.123, 0.086, 0.2]} scale={0.001} />
      <mesh geometry={nodes['Node_#6'].geometry} material={nodes['Node_#6'].material} position={[0.136, 0.108, 0.235]} scale={0.0003} >
         <meshBasicMaterial color={'white'}/>
      </mesh>
      <mesh geometry={nodes['Node_#8'].geometry} material={nodes['Node_#8'].material} scale={0.001} >
        {/* <meshBasicMaterial color={'white'}/> */}
      </mesh>
      <mesh geometry={nodes['Node_#11'].geometry} material={nodes['Node_#11'].material} scale={0.001} />
        </Float>
               
    )
}
useGLTF.preload('./cute/logo-transformed.glb')

const Logo = () => {
    return (
        <Canvas
        style={{  zIndex: 1, width:'100%', height: '100%' }}
        gl={{ preserveDrawingBuffer: false}}
        frameloop='always'
        dpr={[1, 1.5]}
        camera={{ position: [15, 2, 0], fov: 25 }}
      >
        <ambientLight intensity={5} />
        <LogoModel/>
        <Preload all />
      </Canvas >
    )
}

export default Logo