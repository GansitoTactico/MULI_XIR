/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Mulix.glb -o src/components/Model.js 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('public/models/Mulix.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_9f3f1262-fc96-469e-9345-01923601548c'].geometry} material={materials['tripo_mat_9f3f1262-fc96-469e-9345-01923601548c']} />
    </group>
  )
}

useGLTF.preload('public/models/Mulix.glb')
