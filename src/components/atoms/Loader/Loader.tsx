import { Backdrop, CircularProgress } from "@mui/material";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
