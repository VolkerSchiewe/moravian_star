import React, { useState } from "react"
import { Button, Drawer, List, ListItem, ListItemText } from "@material-ui/core";

export default function NavigationDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button style={{position: 'absolute'}} onClick={ () => setOpen(true) }>Settings</Button>
      <Drawer open={ open } onBackdropClick={ () => setOpen(false) }>
        <div>
          <List>
            <ListItem>
              <ListItemText>
                Hello
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  )
}