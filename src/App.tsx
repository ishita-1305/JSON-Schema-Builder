import React, { useRef } from "react";
import { Button } from "antd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaBuilder from "./components/SchemaBuilder";

const App = () => {
  const builderRef = useRef<HTMLDivElement>(null);

  const scrollToBuilder = () => {
    builderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #000000 0%, #a9a8a8ff 100%)",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: "900",
            marginBottom: "20px",
            lineHeight: "1.2",
            textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
          }}
        >
          Welcome to <br /> JSON Schema Builder
        </h1>

        <p
          style={{
            fontSize: "2rem",
            maxWidth: "600px",
            marginBottom: "40px",
            color: "#cccccc",
          }}
        >
          Effortless schema creation and visualization with real-time previews.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <Button
            type="primary"
            size="large"
            onClick={scrollToBuilder}
            style={{
              padding: "12px 48px",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "999px",
              background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
              color: "#000",
              border: "none",
              transition: "all 0.4s ease",
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.25)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(255, 255, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 12px rgba(255, 255, 255, 0.25)";
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      <div
        ref={builderRef}
        style={{
          padding: "60px 80px",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 20px 5px rgba(254, 254, 254, 0.6)";
            e.currentTarget.style.transform = "scale(1.01)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <SchemaBuilder />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
