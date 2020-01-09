import React, { useRef } from "react";
import { extend, useRender, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })


const Controls = () => {
  const { camera, gl } = useThree()
  const orbitRef = useRef()
  useRender(() => orbitRef.current.update())
  return (
    <orbitControls
      args={ [camera, gl.domElement] }
      ref={ orbitRef }
      autorotate={ true }
      enableDamping={ true }
      maxPolarAngle={ Math.PI / 2 }
    />
  )

}

export default Controls