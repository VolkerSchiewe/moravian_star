import React from "react";

export const Colors = [
  '#ffb114', '#ffffff', '#ac1700'
];

export const Stars = [
  26,
  50,
];

export const DefaultSettings = {
  star: Stars[0],
  color: Colors[0]
};

const SettingsContext = React.createContext(DefaultSettings);
export default SettingsContext