"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteUser } from "@/utils/executeQuery";
import "react-toastify/dist/ReactToastify.css";
import ModalUser from "../modal";
import HeadTable from "./HeadTable";
import useTableUsers from "@/customHooks/useTableUsers";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function TableUsers() {
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    dataToEdit,
    setDataToEdit,
    rowsPerPage,
    open,
    handleOpen,
    handleClose,
    setPost,
    rows,
  } = useTableUsers();

  const removeUser = (id: string) => {
    const baseURL = `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/${id}`;
    deleteUser(baseURL,setPost, id);
  };

  return (
    <div className="grid place-content-center">
      <div style={{ textAlign: "end", marginBottom: "2rem" }}>
        <Link
          style={{ backgroundColor: "black", padding: "1rem", color: "white" }}
          href="/usuario"
        >
          Crear usuarios
        </Link>
      </div>
      <div
        style={{
          fontSize: "1.7rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "1rem" }}>Gestiona tus usuarios</h1>
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 1050, minHeight: 350 }}
          aria-label="simple table"
        >
          <HeadTable />
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row: any) => (
              <TableRow
                key={row.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell>{row.fechaNacimiento}</TableCell>
                <TableCell>{row.genero}</TableCell>
                <TableCell>
                  <div>
                    <EditIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDataToEdit(row);
                        handleOpen();
                      }}
                    />
                    <DeleteForeverIcon
                      style={{ cursor: "pointer", marginLeft: "1rem" }}
                      onClick={() => removeUser(row.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <ModalUser
          handleClose={handleClose}
          open={open}
          dataToEdit={dataToEdit}
        />
        
      </TableContainer>
      <ToastContainer />
    </div>
  );
}
