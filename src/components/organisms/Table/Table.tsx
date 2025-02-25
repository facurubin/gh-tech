import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FC, PropsWithChildren } from "react";

interface TableProp {
  headers: string[];
}

export const Table: FC<PropsWithChildren<TableProp>> = ({
  headers,
  children,
}) => {
  return (
    <TableContainer component={Paper} elevation={6}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header: string) => {
              return <TableCell key={header}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};
