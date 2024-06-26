/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/cute/logo.gltf --transform 
Files: ./public/cute/logo.gltf [12.49MB] > D:\Innoventz-2024\logo-transformed.glb [187.07KB] (99%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/logo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node_#0'].geometry} material={nodes['Node_#0'].material} position={[0, 0.068, 0.085]} scale={[0.514, 0.61, 0.305]} />
      <mesh geometry={nodes['Node_#1'].geometry} material={nodes['Node_#1'].material} position={[-0.003, -0.256, 0.075]} scale={[0.231, 0.047, 0.336]} />
      <mesh geometry={nodes['Node_#2'].geometry} material={nodes['Node_#2'].material} position={[0.001, -0.302, 0.078]} scale={[0.121, 0.067, 0.116]} />
      <mesh geometry={nodes['Node_#3'].geometry} material={nodes['Node_#3'].material} position={[-0.123, 0.086, 0.2]} scale={0.001} />
      <mesh geometry={nodes['Node_#6'].geometry} material={nodes['Node_#6'].material} position={[0.136, 0.108, 0.235]} scale={0} />
      <mesh geometry={nodes['Node_#8'].geometry} material={nodes['Node_#8'].material} scale={0.001} />
      <mesh geometry={nodes['Node_#11'].geometry} material={nodes['Node_#11'].material} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/logo-transformed.glb')
