import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import { Link } from "react-router-dom";

export const SideMenuIcons: React.FC = () => {
  return (
    <List>
      <Link to="/books">
        <ListItem button key={"Books"}>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary={"Books"} />
        </ListItem>
      </Link>
    </List>
  );
};
