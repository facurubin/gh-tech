import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { FC, useState } from "react";

export const FavoriteButton: FC = () => {
  const [selected, setSelected] = useState(false);
  const handleOnClick = () => setSelected((prevSelected) => !prevSelected);
  return (
    <IconButton onClick={handleOnClick}>
      {selected ? <StarIcon /> : <StarBorderOutlinedIcon />}
    </IconButton>
  );
};
