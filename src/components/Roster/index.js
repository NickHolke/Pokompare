import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';

function Roster({ list, closeDrawer, isOpen }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      {list.map(item => (
        <List>
          <ListItem key={item['name']}>{item['name']}</ListItem>
        </List>
      ))}
    </Drawer>
  );
}

export default Roster;
