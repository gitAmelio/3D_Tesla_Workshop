import React, { useRef } from "react";
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { useSnapshot } from "valtio";
import { easing } from 'maath';
import { state } from "../store";
import * as THREE from 'three';

interface BoxProps {
  meshId?: number;
  [key: string]: any;
}

const Box: React.FC<BoxProps> = ({meshId, ...props}) => {
  
  const ref = useRef<Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/PavingStones.jpg');

  const snap = useSnapshot(state);

  useFrame((state, delta) => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      if (meshId === snap.active){
        easing.damp( ref.current.scale, 'x', 1.5, 0.25, delta)
        easing.damp( ref.current.scale, 'y', 1.5, 0.25, delta)
        easing.damp( ref.current.scale, 'z', 1.5, 0.25, delta)
      } 
      else {
        easing.damp( ref.current.scale, 'x', 1, 0.25, delta)
        easing.damp( ref.current.scale, 'y', 1, 0.25, delta)
        easing.damp( ref.current.scale, 'z', 1, 0.25, delta)
      }
  })

  // const handlePointerDown:((event: ThreeEvent<PointerEvent>) => void) = () => {
  const handlePointerDown:((event: any) => void) = () => {
    state.active = meshId !== snap.active ?  meshId! : 0;
  }
  const handlePointerEnter:((event: ThreeEvent<PointerEvent>) => void) = () => {

  }
  const handlePointerLeave:((event: ThreeEvent<PointerEvent>) => void) = () => {

  }

  return (
    <mesh 
      ref={ref} 
      {...props} 
      castShadow 
      // receiveShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      >
      <boxGeometry/>
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