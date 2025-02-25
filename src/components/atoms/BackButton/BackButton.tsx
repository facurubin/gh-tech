import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackButton = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.back();
  };
  return (
    <IconButton onClick={handleOnClick}>
      <ArrowBackIcon htmlColor="#FFF" />
    </IconButton>
  );
};
