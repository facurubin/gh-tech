import { TableCell } from "@mui/material";
import { FC } from "react";
import { FavoriteButtonCellProps } from "./types";
import { FavoriteButton } from "@/components/atoms/FavoriteButton/FavoriteButton";

export const FavoriteButtonCell: FC<FavoriteButtonCellProps> = () => {
  return (
    <TableCell>
      <FavoriteButton />
    </TableCell>
  );
};
