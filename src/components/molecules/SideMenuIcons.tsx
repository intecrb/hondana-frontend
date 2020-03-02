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
      <ListItem button key={"Books"}>
        <ListItemIcon>
          <Link to="/books">
            <ImportContactsIcon />
          </Link>
        </ListItemIcon>
        <ListItemText primary={"Books"} />
      </ListItem>
    </List>
  );
};
