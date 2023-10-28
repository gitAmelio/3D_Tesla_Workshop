import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import { Suspense } from 'react';
import Background from './components/Backgroud';

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas 
        shadows
        style={{background: 'black'}} 
        camera={{position: [1,5,1]}}
        >
        <ambientLight intensity={0.2} />  
        {/* <fog attach='fog' args={['white', 1, 10]}/> */}
        <Bulb position={[0,3,0]}/>
        <Suspense fallback={null}>
          <Box position={[0,1,0]}/>
        </Suspense>
        <Suspense>
          <Background />
        </Suspense>
        <axesHelper args={[5]}/>
        <OrbitControls />
        {/* <CustomGeometryParticles count={2000} shape="sphere"/> */}
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  )
}

export default App; 