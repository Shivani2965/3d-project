import React from 'react'
import { Canvas , useThree} from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Dog = () => {
    const scene = useGLTF("/models/Fish.glb")

  return (
    <>
    <primitive object={scene.scene}  />
        <OrbitControls />
        <directionalLight position={[10,10,5]} intensity={1} />
      </>
    
  )
}

export default Dog
