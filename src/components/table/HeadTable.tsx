import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const HeadTable = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          Nombre Completo
        </TableCell>
        <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          Fecha de nacimiento
        </TableCell>
        <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          Genero
        </TableCell>
        <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          Acciones
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default HeadTable;
