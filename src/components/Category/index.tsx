import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export const Category: React.FunctionComponent = () => {
  return (
    <List component="div">
      <ListItem component="div" divider={true}>
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem button component="div">
        <ListItemText primary="Terror" />
      </ListItem>
      <ListItem button component="div">
        <ListItemText primary="Comedia" />
      </ListItem>
      <ListItem button component="div">
        <ListItemText primary="Suspenso" />
      </ListItem>
    </List>
  );
};
