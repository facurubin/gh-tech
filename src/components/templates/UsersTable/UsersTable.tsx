import { Table } from "@/components/organisms/Table/Table";
import { useListUsers } from "@/hooks/useUsers/useListUsers";
import { Box, TableRow } from "@mui/material";
import { AvatarCell } from "@/components/molecules/AvatarCell/AvatarCell";
import { TypeCell } from "@/components/molecules/TypeCell/TypeCell";
import { LinkCell } from "@/components/molecules/LinkCell/LinkCell";
import { NameCell } from "@/components/molecules/NameCell/NameCell";
import { FavoriteButtonCell } from "@/components/molecules/FavoriteButtonCell/FavoriteButtonCell";
import { IUsers } from "@/models/Users";
import { useRouter } from "next/router";
import { Loader } from "@/components/atoms/Loader/Loader";

const headers = ["", "Avatar", "Username", "Type", "Link Profile"];

export const UserTable = () => {
  const router = useRouter();
  const term = (router.query?.q as string) ?? "";
  const { users, isLoading } = useListUsers(term);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Table headers={headers}>
        {users.map((user: IUsers) => (
          <TableRow key={user.id}>
            <FavoriteButtonCell user={user} />
            <AvatarCell user={user} />
            <NameCell user={user} />
            <TypeCell user={user} />
            <LinkCell user={user} />
          </TableRow>
        ))}
      </Table>
    </Box>
  );
};
