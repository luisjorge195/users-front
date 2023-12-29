import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "60px",
        padding: "2px",
       
      }}
      className="flex justify-between items-center mx-12 w-full"
    >
      <Link href="/usuario/usuario-consulta" style={{ color: "white",  marginLeft: "2rem",
        marginRight: "2rem", width:'100%', flex:'1' }}>
        Gestión de usuarios
      </Link>
      <Link href="/" style={{ color: "white", width:'100%', flex:'1' ,marginLeft: "2rem",
        marginRight: "2rem", }}>
        Salir
      </Link>
    </div>
  );
};

export default Navbar;
