import { Avatar, TableCell } from "@mui/material";
import { AvatarCellProps } from "./types";
import { FC } from "react";

export const AvatarCell: FC<AvatarCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Avatar alt={user.username} src={user.avatarUrl} />
    </TableCell>
  );
};
