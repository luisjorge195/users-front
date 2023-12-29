import Navbar from "@/src/components/navbar/Navbar";
import TableUsers from "@/src/components/table/TableUsers";
import React from "react";

const QueryUser = () => {
  return (
    <div className="w-full">
      <Navbar />
      <section className="w-full grid place-items-center h-screen">
        <TableUsers />
      </section>
    </div>
  );
};

export default QueryUser;
