import { TableCell } from "@mui/material";
import { AvatarCellProps } from "./types";
import { FC } from "react";
import { Avatar } from "@/components/atoms/Avatar/Avatar";

export const AvatarCell: FC<AvatarCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Avatar alt={user.username} src={user.avatarUrl} />
    </TableCell>
  );
};
