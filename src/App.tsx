import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';

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
      </Canvas>
    </div>
  )
}

export default App;