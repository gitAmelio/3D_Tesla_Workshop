import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

interface BoxProps {
  [key: string]: any;
}

const Box: React.FC<BoxProps> = () => {
  const ref = useRef<Mesh>(null!);
  useFrame(state => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
  })
  return (
    <mesh ref={ref}>
      <boxGeometry/>
      <meshBasicMaterial color='blue'/>
    </mesh>
  )
}

export default Box;