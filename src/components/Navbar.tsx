import React from "react";
import { Layout } from "antd";

const Navbar = () => {
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: 64,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 700,
          letterSpacing: "1px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        JSON Builder
      </div>
    </Layout.Header>
  );
};

export default Navbar;
