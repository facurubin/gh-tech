import { ROUTES } from "@/constants";
import { LinkCellProps } from "./types";
import { FC } from "react";
import { TableCell } from "@mui/material";
import Link from "next/link";

export const LinkCell: FC<LinkCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Link href={ROUTES.PROFILE(user.username)}>Link</Link>
    </TableCell>
  );
};
