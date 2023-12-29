"use client";

import Form from "@/src/components/form/Form";
import Navbar from "@/src/components/navbar/Navbar";
import React from "react";

const User = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full grid place-items-center h-screen">
        <Form />
      </section>
    </div>
  );
};

export default User;
