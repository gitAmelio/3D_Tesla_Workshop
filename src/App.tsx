import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import CustomGeometryParticles from './components/Customparticles';

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas 
        style={{background: 'black'}} 
        camera={{position: [3,3,3]}}
        >
        <Box position={[1,1,0]}/>
        <axesHelper args={[5]}/>
        <OrbitControls />
        {/* <ambientLight intensity={0.5} /> */}
        {/* <CustomGeometryParticles count={9} shape="box"/> */}
        <CustomGeometryParticles count={2000} shape="sphere"/>
      </Canvas>
    </div>
  )
}

export default App; 