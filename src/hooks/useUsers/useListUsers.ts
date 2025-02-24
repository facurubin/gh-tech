import { usersService } from "@/services/users";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ListGHUsers } from "./types";
import { IUsers } from "@/models/Users";

export const useListUsers = (term = "") => {
  const isSearchingUsers = term?.length > 0;

  const { data: listUsersRaw = [], isLoading } = useQuery<ListGHUsers[]>({
    queryKey: ["list-users"],
    queryFn: async () => {
      const { data } = await usersService.list();
      return data;
    },
    enabled: !isSearchingUsers,
  });

  const { data: searchUsersRaw = [], isFetched: isFetchedSearchUsers } =
    useQuery<ListGHUsers[]>({
      queryKey: ["search-users", term],
      queryFn: async () => {
        const { data } = await usersService.search(term);
        return data?.items;
      },
      enabled: isSearchingUsers,
    });

  const users = useMemo<IUsers[]>(() => {
    const userRaw = isFetchedSearchUsers ? searchUsersRaw : listUsersRaw;
    return userRaw.map(({ node_id, avatar_url, login, type, url }) => ({
      id: node_id,
      avatarUrl: avatar_url,
      username: login,
      type,
      url,
    }));
  }, [listUsersRaw, isFetchedSearchUsers, searchUsersRaw]);

  return { users, isLoading };
};
