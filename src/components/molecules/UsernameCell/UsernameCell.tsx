import { TableCell, Typography } from "@mui/material";
import { UsernameCellProps } from "./types";
import { FC } from "react";

export const UsernameCell: FC<UsernameCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Typography>{user.username}</Typography>
    </TableCell>
  );
};
