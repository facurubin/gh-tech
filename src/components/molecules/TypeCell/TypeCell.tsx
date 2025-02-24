import { TableCell, Typography } from "@mui/material";
import { TypeCellProps } from "./types";
import { FC } from "react";

export const TypeCell: FC<TypeCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Typography>{user.type}</Typography>
    </TableCell>
  );
};
