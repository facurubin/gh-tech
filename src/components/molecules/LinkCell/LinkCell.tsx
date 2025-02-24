import { URL_GITHUB } from "@/constants";
import { LinkCellProps } from "./types";
import { FC } from "react";
import { TableCell } from "@mui/material";
import Link from "next/link";

export const LinkCell: FC<LinkCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Link href={`${URL_GITHUB}${user.username}`}>Link</Link>
    </TableCell>
  );
};
