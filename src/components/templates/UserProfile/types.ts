import { Repository } from "@/models/Repository";
import { IProfile } from "@/models/Users";

export interface UserProfileProps {
  profile: IProfile;
  repositories: Repository[];
}
