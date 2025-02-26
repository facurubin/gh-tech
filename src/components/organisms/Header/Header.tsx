import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";
import { HeaderProps } from "./types";
import { SearchHeader } from "@/components/molecules/SearchHeader/SearchHeader";

export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  title,
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }} data-testid="header">
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {children}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <SearchHeader />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
