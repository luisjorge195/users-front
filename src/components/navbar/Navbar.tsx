import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "60px",
        padding: "2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <Link
        href="/usuario/usuario-consulta"
        style={{
          color: "white",
          width: "100%",
          flex: "1",
          marginLeft: "2rem",
          marginRight: "2rem",
          
        }}
      >
        Gestionar usuarios
      </Link>
      <Link
        href="/"
        style={{
          textAlign:"end",
          color: "white",
          width: "100%",
          flex: "1",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        Salir
      </Link>
    </div>
  );
};

export default Navbar;
