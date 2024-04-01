import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload, shaderMaterial, useGLTF, ScrollControls, Scroll, useScroll, Float, Select } from "@react-three/drei";
import { Leva, useControls } from 'leva'
import { EffectComposer, Noise, Glitch, Selection, ChromaticAberration } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction } from 'postprocessing'
import { Particles } from './Particle';

import { Plane } from './Background';
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Event from '../components/Event/Event'
import Team from '../components/Team/Team'
import Marque from '../components/Marque/Marque'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Footer1 from '../components/Footer/Footer1'
import Header from '../components/Header/Header'
import { ScrollManager } from '../components/ScrollManager';
import Loader from '../components/Loader/Loader';


function FaceModel(props) {
    const ref = useRef()
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('./Innov/cute.gltf')
    const { faceColor, eyeColor } = useControls({ faceColor: '#ff1992', eyeColor: '#ffffff' })

    useGLTF.preload('./Innov/cute.gltf')

    const ColorShiftMaterial = shaderMaterial(
        {
            time: 0.0,
            speed: 5.0,
            charSize: { x: 1, y: 2 },
            charResolution: 1,
            color: new THREE.Color(faceColor),
            resolution: { x: 1, y: 1.5 },
        },
        // vertex shader
        /*glsl*/`
        varying vec2 vUv;

        void main(){
            gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);
            vUv=uv;
        }
        `,
        `
        uniform float time;
        uniform float speed;
        uniform vec2 charSize;
        uniform float charResolution;
        uniform vec3 color;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        float seed=2.;
        
        float random(float x){
            return fract(sin(x)*43758.5453);
        }
        
        float random(vec2 st){
            return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
        }
        
        float randomChar(vec2 outer,vec2 inner){
            vec2 margin=1.-charSize;
            vec2 borders=step(margin,inner)*step(margin,1.-inner);
            return step(
                .5,
                random(outer*seed+floor(inner*charResolution))
            )*borders.x*borders.y;
        }
        
        vec4 matrix(vec2 st){
            float rows=200.;
            vec2 ipos=floor(st*rows)+vec2(1.,0.);
            ipos+=vec2(0.,floor(time*speed*random(ipos.x)));
            vec2 fpos=fract(st*rows);
            vec2 center=.5-fpos;
            float pct=random(ipos);
            float glow=(1.-dot(center,center)*3.)*1.;
            float result=randomChar(ipos,fpos)*pct*glow;
            return vec4(color*result,result);
        }
        void main(){
            vec2 st=vUv*resolution;
            gl_FragColor=vec4(0.,0.,0.,1.)+matrix(st);
        }
        
        `
    )

    extend({ ColorShiftMaterial })

    const scroll = useScroll()

    useFrame((state, delta) => {
        // ref.current.time += delta
        // modelRef.current.position.y = - 24 - (scroll.offset * ( window.innerHeight) * 6)
        // modelRef.current.rotation.y = 1.3 + (scroll.offset * 0.8)
        // modelRef.current.position.z = -0.5 + (scroll.offset * 0.8)
    })

    return (
        <Float speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.4, 0.4]}
            scale={1} position={[0, 0, 0]} rotation={[0, -0 , 0]}>

        <group {...props} dispose={null} ref={modelRef} >
        <mesh geometry={nodes.geometry_0001.geometry} material={materials['New Material']}  scale={5}>
 
        </mesh>
      </group>
      </Float>
        // <Float speed={1} // Animation speed, defaults to 1
        //     rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        //     floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        //     floatingRange={[-0.4, 0.4]}
        //     scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        //     <group {...props} dispose={null} scale={15} position={[0, -24, -0.1]} rotation={[0, 1.3, 0]} ref={modelRef}>
        //         <group rotation={[-Math.PI / 2, 0.015, -0.593]}>
        //             <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        //                 <mesh geometry={nodes.eye_low_L_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
        //                     <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} color={new THREE.Color(eyeColor)} />
        //                 </mesh>
        //                 <mesh geometry={nodes.eye_low_L001_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
        //                     <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} color={new THREE.Color(eyeColor)} />
        //                 </mesh>
        //                 <mesh geometry={nodes.man_body_0014_uv_map_Material004_0.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
        //                     <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} />
        //                 </mesh>
        //             </group>
        //         </group>
        //     </group>
        // </Float>

    )
}
useGLTF.preload('./face2/scene.gltf')


// const Interface = (props) => {
//     const clientRef = useRef()
//     const { navigate, setTotalHeight } = props
    
//     useEffect(() => {
//         const resizeObserver = new ResizeObserver(entries => {
//             setTotalHeight(entries[0].target.clientHeight)
//         }
//         )
//         resizeObserver.observe(clientRef.current)
//     }, [])

//     return (
//         <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', height: '100%' }} ref={clientRef} >
//             <Hero />
//             <About />
//             <Event navigate={navigate} />
//             <Team />
//             <Gallery navigate={navigate} >
//                 <img src={require(`../assets/images/gallery/1.webp`)} alt="slide_image" className='gallery__image' />
//                 <img src={require(`../assets/images/gallery/2.webp`)} alt="slide_image" className='gallery__image' />
//                 <img src={require(`../assets/images/gallery/3.webp`)} alt="slide_image" className='gallery__image' />
//                 <img src={require(`../assets/images/gallery/4.webp`)} alt="slide_image" className='gallery__image' />
//                 <img src={require(`../assets/images/gallery/5.webp`)} alt="slide_image" className='gallery__image' />
//             </Gallery>
//             <Contact />
//             <Footer />
//         </div>
//     )
// }



const HomeCanvas = () => {
    const props = useControls({
        focus: { value: 5.43, min: 3, max: 7, step: 0.01 },
        speed: { value: 62, min: 0.1, max: 100, step: 0.1 },
        aperture: { value: 5.6, min: 1, max: 5.6, step: 0.1 },
        fov: { value: 110, min: 0, max: 200 },
        curl: { value: 0.30, min: 0.01, max: 1, step: 0.01 },
    })

    return (
        <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
            <Canvas
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                frameloop='always'
                dpr={[1, 1.5]}
                camera={{ position: [15, 2, 0], fov: 25 }}
            >
                <ambientLight intensity={10} />
                <Suspense>
                                <EffectComposer disableNormalPass multisampling={16} >
                                    <Noise opacity={0.2} />
                                    {/* <ChromaticAberration blendFunction={BlendFunction.NORMAL}
                                        offset={[0.0015, 0.0015]} /> */}
                                </EffectComposer>
                                    <Particles {...props} size={10}/>
                                    <FaceModel />

                </Suspense>
                
                <Preload all />
            </Canvas >

        </div >
    );
};


export default HomeCanvas