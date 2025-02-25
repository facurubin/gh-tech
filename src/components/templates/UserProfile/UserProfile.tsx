import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import { FavoriteButton } from "@/components/atoms/FavoriteButton/FavoriteButton";
import Link from "next/link";
import { Repository } from "@/services/repositories";

interface IProfile {
  user: {
    name: string;
    blog: string;
    bio: string;
    location: string;
    avatar_url: string;
  };
  repositories: Repository[];
}

export const UserProfile = ({ profile }: { profile: IProfile }) => {
  const { user, repositories } = profile;
  return (
    <Box component="main" display="flex">
      <Box>
        <List
          sx={{
            position: "relative",
            overflow: "auto",
            height: "calc(100vh - 86px)",
          }}
          subheader={<ListSubheader>Repositories</ListSubheader>}
        >
          {repositories.map(({ name, url }) => (
            <ListItem key={name}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <Link href={url}>
                <ListItemText primary={name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 4 }} flexGrow={1}>
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            sx={{ height: 400 }}
            image={user.avatar_url}
            title={user.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Location: {user.location}
            </Typography>
            {user.bio && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Bio: {user.bio}
              </Typography>
            )}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Blog: <Link href={user.blog}>{user.blog}</Link>
            </Typography>
          </CardContent>
          <CardActions>
            <FavoriteButton />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
