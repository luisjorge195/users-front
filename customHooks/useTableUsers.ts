import { createData } from "@/utils/createData";
import { getAllUsers } from "@/utils/executeQuery";
import axios from "axios";
import React, { useEffect } from "react";

const useTableUsers = () => {
  const [page, setPage] = React.useState(0);
  const [dataToEdit, setDataToEdit] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post, setPost] = React.useState([]);
  const baseURL = "http://localhost:3001/users";

  React.useEffect(() => {
    getAllUsers(baseURL, setPost, post)
    axios.get(baseURL).then((response) => {
      setPost(response.data ? response.data : []);
    });
  }, []);

  let rows: any = [];


    rows = Array.isArray(post)
      ? post.map((item: any) =>
          createData(
            item?.nombre,
            item?.fechaNacimiento,
            item?.genero,
            item?.id
          )
        )
      : [];

     
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    dataToEdit,
    setDataToEdit,
    rowsPerPage,
    rows,
    open,
    handleOpen,
    handleClose,
    post,
    setPost,
  };
};

export default useTableUsers;
