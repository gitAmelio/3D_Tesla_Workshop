const Bulb = ({...props}) => {
  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereGeometry args={[0.2, 20, 20]}/>
      <meshPhongMaterial emissive={'yellow'}/>
    </mesh>
  )
}

export default Bulb;