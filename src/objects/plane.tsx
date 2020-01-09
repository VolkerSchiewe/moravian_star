import React from "react";

export default function Plane() {
  const color = "#a2a2a2"
  return (
    <mesh receiveShadow position={ [0, -2, 0] } rotation={ [-Math.PI / 2, 0, 0] }>
      <planeBufferGeometry attach="geometry" args={ [1000, 1000] }/>
      <meshPhongMaterial attach="material" color={color}/>
    </mesh>
  )
}