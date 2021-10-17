import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import Controls from "../scene/controls";
import Star from "../objects/star";
import Lights from "../scene/lights";
import Plane from "../objects/plane";
import NavigationDrawer from "./NavigationDrawer";
import SettingsContext, { DefaultSettings } from "./settingsContext";


export default function App() {
  const [settings, changeSettings] = useState(DefaultSettings)

  return (
    <div style={ { height: '100%' } }>
      <SettingsContext.Provider value={ settings }>
        <NavigationDrawer changeSettings={changeSettings}/>
        <Canvas className="main" shadowMap camera={ { position: [10, 10, 10] } }>
          <fog attach="fog" args={ ['white', 40, 80] }/>
          <Controls/>
          <Lights/>
          <Plane/>
          <Star/>
          {/*<pointLight args={['white', 1, 1000]} position={[0,0,0]}/>*/ }
          {/*<axesHelper args={ 5 }/>*/ }
        </Canvas>
      </SettingsContext.Provider>
    </div>
  )
}

