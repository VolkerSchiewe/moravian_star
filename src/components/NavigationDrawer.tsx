import React, { useContext, useState } from "react"
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Radio
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SettingsContext, { Colors } from "./settingsContext";
import { Color } from "three";

export default function NavigationDrawer({ changeSettings }: { changeSettings: () => void }) {
  const [open, setOpen] = useState(false);
  const [star, setStar] = useState(0);
  // const [color, setColor] = useState(0);
  const settings = useContext(SettingsContext);
  const starSizes = [26, 50];
  // const colors = ['#ffb114', '#ffffff', '#ac1700'];
  return (
    <React.Fragment>
      <IconButton
        style={ { position: 'absolute', right: 0, zIndex: 2 } }
        color="inherit"
        onClick={ () => setOpen(true) }
      >
        <MenuIcon/>
      </IconButton>
      <Drawer open={ open } onBackdropClick={ () => setOpen(false) } anchor={ 'right' }>
        <div>
          <List>
            <ListSubheader>Settings</ListSubheader>
            { starSizes.map((size, i) => {
              const disabled = size !== 26;
              return (
                <ListItem key={ i } disabled={ disabled } onClick={ () => !disabled ? setStar(i) : null }>
                  <ListItemIcon>
                    <Radio
                      checked={ star === i }
                      value={ i }
                      disabled={ disabled }
                    />
                  </ListItemIcon>
                  <ListItemText>
                    { `Star with ${ size } jags` }
                  </ListItemText>
                </ListItem>
              );
            }) }
            <ListSubheader>Color</ListSubheader>
            { Colors.map((c, i) => (
              <ListItem key={ i } onClick={ () => changeSettings({...settings, color: Colors[i]}) }>
                <Radio
                  checked={ settings.color === i }/>
                <ListItemText style={ { backgroundColor: Colors[i] } }>
                  { Colors[i] }
                </ListItemText>
              </ListItem>
            )) }
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  )
}