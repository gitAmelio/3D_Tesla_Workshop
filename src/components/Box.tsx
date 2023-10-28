import React, { useRef } from "react";
import * as THREE from 'three';
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  [key: string]: any;
}

const Box: React.FC<BoxProps> = ({...props}) => {
  const ref = useRef<Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/PavingStones.jpg');

  console.log(texture)

  useFrame(state => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
  })
  return (
    <mesh 
      ref={ref} 
      {...props} 
      castShadow 
      // receiveShadow
      >
      <sphereGeometry/>
      {/* <meshBasicMaterial color='blue'/> */}
      <meshPhysicalMaterial 
      // <meshStandardMaterial 
        map={texture}
        // color='white'
        // // opacity={0.2}
        // transparent
        // // wireframe
        // // metalness={1}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        // side={THREE.DoubleSide}
        />
    </mesh>
  )
}

export default Box;