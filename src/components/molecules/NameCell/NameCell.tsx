import { TableCell, Typography } from "@mui/material";
import { NameCellProps } from "./types";
import { FC } from "react";

export const NameCell: FC<NameCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Typography>@{user.username}</Typography>
    </TableCell>
  );
};
