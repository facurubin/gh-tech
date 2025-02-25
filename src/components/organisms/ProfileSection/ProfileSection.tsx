import { FavoriteButton } from "@/components/atoms/FavoriteButton/FavoriteButton";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ProfileSectionProps } from "./types";

export const ProfileSection: FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <Box sx={{ p: 4 }} flexGrow={1} alignContent="center">
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          sx={{ height: 600 }}
          image={profile.avatar_url}
          title={profile.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profile.name}
          </Typography>
          {profile.location && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Location: {profile.location}
            </Typography>
          )}
          {profile.bio && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Bio: {profile.bio}
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Blog: <Link href={profile.blog}>{profile.blog}</Link>
          </Typography>
        </CardContent>
        <CardActions>
          <FavoriteButton />
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
