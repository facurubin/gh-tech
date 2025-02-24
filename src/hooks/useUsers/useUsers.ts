import { usersService } from "@/services/users";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ListGHUsers } from "./types";
import { IUsers } from "@/models/Users";

export const useUsers = () => {
  const { data: listUsersRaw = [] } = useQuery<ListGHUsers[]>({
    queryKey: ["list-users"],
    queryFn: async () => {
      const { data } = await usersService.list();
      return data;
    },
  });

  const listUsers = useMemo<IUsers[]>(() => {
    const users = listUsersRaw.map(
      ({ node_id, avatar_url, login, type, url }) => ({
        id: node_id,
        avatarUrl: avatar_url,
        username: login,
        type,
        url,
      }),
    );
    return users;
  }, [listUsersRaw]);

  return listUsers;
};
