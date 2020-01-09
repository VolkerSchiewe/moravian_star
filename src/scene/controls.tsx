import React, { useRef } from "react";
import { extend, useRender, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })


const Controls = () => {
  const { camera, gl } = useThree()
  const orbitRef = useRef()
  useRender(() => orbitRef.current.update())
  return <orbitControls autorotate={true} ref={ orbitRef } args={ [camera, gl.domElement] } enableDamping={true}/>
}

export default Controls