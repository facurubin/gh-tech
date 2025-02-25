import { UserProfileProps } from "./types";
import { FC } from "react";
import { RepositoriesSections } from "@/components/organisms/RepositoriesSection/RepositoriesSection";
import { ProfileSection } from "@/components/organisms/ProfileSection/ProfileSection";
import { Box } from "@mui/material";

export const UserProfile: FC<UserProfileProps> = ({
  profile,
  repositories,
}) => {
  return (
    <Box component="main" display="flex">
      <RepositoriesSections repositories={repositories} />
      <ProfileSection profile={profile} />
    </Box>
  );
};
