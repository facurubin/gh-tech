import { IconButton, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackButton = () => {
  const router = useRouter();
  const theme = useTheme();
  const handleOnClick = () => {
    router.back();
  };
  return (
    <IconButton onClick={handleOnClick}>
      <ArrowBackIcon htmlColor={theme.palette.common.white} />
    </IconButton>
  );
};
