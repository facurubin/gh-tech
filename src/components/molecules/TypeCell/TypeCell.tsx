import { Chip, TableCell } from "@mui/material";
import { TypeCellProps } from "./types";
import { FC } from "react";

export const TypeCell: FC<TypeCellProps> = ({ user }) => {
  return (
    <TableCell align="center">
      <Chip label={user.type} color="primary" variant="outlined" />
    </TableCell>
  );
};
