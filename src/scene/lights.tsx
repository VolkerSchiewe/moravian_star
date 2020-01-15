import React from "react";

export default function Lights() {
  return (
    <React.Fragment>
      <ambientLight intensity={ 0.5 }/>
      <spotLight intensity={ 0.6 } position={ [30, 30, 50] } angle={ 0.2 } penumbra={ 1 } castShadow/>
      <spotLight intensity={ 0.2 } position={ [-30, -30, -50] } angle={ 0.2 } penumbra={ 1 } castShadow/>
    </React.Fragment>
  )
}