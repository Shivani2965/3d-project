import * as THREE from 'three'
import { useEffect } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

const Fish = () => {
  const { scene, animations } = useGLTF('/models/Fish.glb')
  const { actions } = useAnimations(animations, scene)
  const { camera } = useThree()

  // Set camera once
  useEffect(() => {
    camera.position.set(0, 2, 10)
    camera.lookAt(0, 0, 0)
  }, [camera])

  // Play animation (like a GIF loop)
  useEffect(() => {
    if (actions) {
      const firstAction = Object.values(actions)[0]
      firstAction?.reset().fadeIn(0.5).play()
    }
  }, [actions])

  return (
    <>
      <primitive
        object={scene}
        scale={1.5}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      />

      <directionalLight position={[5, 5, 5]} intensity={2} />
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
    </>
  )
}

export default Fish
