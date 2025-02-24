import { TableCell, ToggleButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { FC, useState } from "react";
import { FavoriteButtonCellProps } from "./types";

export const FavoriteButtonCell: FC<FavoriteButtonCellProps> = () => {
  const [selected, setSelected] = useState(false);
  const handleOnClick = () => setSelected((prevSelected) => !prevSelected);
  return (
    <TableCell>
      <ToggleButton value="check" selected={selected} onClick={handleOnClick}>
        {selected ? <StarIcon /> : <StarBorderOutlinedIcon />}
      </ToggleButton>
    </TableCell>
  );
};
