/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: pandan (https://sketchfab.com/pandan)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/nike-air-mag-15ef47bad0aa4666b459cf78261abce5
title: Nike Air Mag
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/nike.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.2, -1]} rotation={[-2, 0, 0]} scale={0.057}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.StingrayPBS1SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/nike.gltf')
