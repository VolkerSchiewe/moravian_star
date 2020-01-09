import React from 'react'
import { Canvas } from 'react-three-fiber'
import Controls from "../scene/controls";
import Star from "../objects/star";
import Lights from "../scene/lights";
import Plane from "../objects/plane";


export default function App() {

  return (
    <Canvas className="main" shadowMap camera={ { position: [10, 10, 10] } }>
      <fog attach="fog" args={ ['white', 40, 80] }/>
      <Controls/>
      <Lights/>
      <Plane/>
      <Star/>
      {/*<pointLight args={['white', 1, 1000]} position={[0,0,0]}/>*/}
      {/*<axesHelper args={ 5 }/>*/}
    </Canvas>
  )
}

