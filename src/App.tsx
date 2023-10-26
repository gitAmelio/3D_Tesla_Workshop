import { Canvas } from '@react-three/fiber';
import Box from './components/Box';

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas style={{background: 'black'}}>
        <Box />
      </Canvas>
    </div>
  )
}

export default App;