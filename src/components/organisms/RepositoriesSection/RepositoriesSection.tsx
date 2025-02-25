import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

import { FC } from "react";
import { RepositoriesSectionProps } from "./types";

export const RepositoriesSections: FC<RepositoriesSectionProps> = ({
  repositories,
}) => {
  return (
    <Box>
      <List
        sx={{
          position: "relative",
          overflow: "auto",
          height: "calc(100vh - 86px)",
        }}
        subheader={<ListSubheader>Repositories</ListSubheader>}
      >
        {repositories.map(({ name, url }) => (
          <ListItem key={name}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <Link href={url} target="_blank">
              <ListItemText primary={name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
