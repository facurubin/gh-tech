import { ROUTES } from "@/constants";
import { LinkCellProps } from "./types";
import { FC } from "react";
import { Button, TableCell } from "@mui/material";
import Link from "next/link";

export const LinkCell: FC<LinkCellProps> = ({ user }) => {
  return (
    <TableCell>
      <Link href={ROUTES.PROFILE(user.username)}>
        <Button size="small">Learn More</Button>
      </Link>
    </TableCell>
  );
};
