import React from 'react'
import { Canvas } from 'react-three-fiber'
import Controls from "../scene/controls";
import Star from "../objects/star";
import Lights from "../scene/lights";
import Plane from "../objects/plane";


export default function App() {

  return (
    <Canvas className="main" shadowMap camera={{position:[3,3,4]}}>
      <fog attach="fog" args={['white', 10, 20]}/>
      <Controls/>
      <Lights/>
      <Plane/>
      <Star/>
      <axesHelper args={5}/>
    </Canvas>
  )
}

