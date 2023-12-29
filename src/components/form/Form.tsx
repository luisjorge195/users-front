"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Autocomplete from "@mui/material/Autocomplete";
import { insertUser, updateUser } from "@/utils/executeQuery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import useTableUsers from "@/customHooks/useTableUsers";

export default function Form({ dataToEdit, handleClose }: any) {
  const initialData = {
    nombre: dataToEdit?.nombre || "",
    fechaNacimiento: dataToEdit?.fechaNacimiento || null,
    genero: dataToEdit?.genero || "",
  };
  const [data, setData] = React.useState(initialData);
  const {setPost, post} = useTableUsers()
  const saveUser = () => {
    const baseURL =
      dataToEdit !== undefined
        ? `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/${dataToEdit?.id}`
        : process.env.NEXT_PUBLIC_ANALYTICS_URL || "";
      dataToEdit === undefined
      ? insertUser(baseURL, data)
      : updateUser(baseURL, data, handleClose, setPost, dataToEdit, post);
    
    !dataToEdit?.id && setData(initialData);
  };
 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="m-4 ">
        {dataToEdit === undefined ? (
          <div style={{ textAlign: "end", marginBottom: "2rem" }}>
            <Link
              style={{
                backgroundColor: "black",
                padding: "1rem",
                color: "white",
              }}
              href="/usuario/usuario-consulta"
            >
              Consultar usuarios
            </Link>
          </div>
        ) : (
          ""
        )}
        <div
          style={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            marginBottom: "6rem",
            padding: "1.1rem",
            backgroundColor: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1>
            {dataToEdit === undefined
              ? "Crea aquí tus usuarios"
              : "Editar usuario"}
          </h1>
        </div>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "white",
            padding: "4rem",
            marginBottom: "4.2rem",
          }}
        >
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Nombre completo"
              variant="outlined"
              defaultValue={dataToEdit?.nombre || ""}
              onChange={(e) => {
                setData({
                  ...data,
                  nombre: e.target.value,
                });
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Fecha de Nacimiento"
              variant="outlined"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: { padding: "10.5px 14px" }, // Ajusta el espaciado según sea necesario
              }}
              defaultValue={dataToEdit?.fechaNacimiento}
              onChange={(e: any) => {
                setData({
                  ...data,
                  fechaNacimiento:
                    e.target.value || dataToEdit?.fechaNacimiento,
                });
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[{ label: "Masculino" }, { label: "Femenino" }]}
              defaultValue={
                dataToEdit?.genero !== "" && { label: dataToEdit?.genero }
              }
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option.label || "Seleccionar"} // Devuelve 'Seleccionar' si la etiqueta es undefined
              renderInput={(params) => <TextField {...params} label="Género" />}
              onChange={(event: any, value: any) => {
                setData({
                  ...data,
                  genero: value?.label || dataToEdit?.genero,
                });
              }}
              aria-required
            />
          </Grid>
          <div style={{ width: "100%", marginTop: "2rem" }}>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1.2rem",
                width: "100%",
              }}
              onClick={() => saveUser()}
            >
              {dataToEdit === undefined ? "Crear Usuario" : "Editar usuario"}
            </button>
            <ToastContainer />
          </div>
        </Grid>
      </div>
    </LocalizationProvider>
  );
}
