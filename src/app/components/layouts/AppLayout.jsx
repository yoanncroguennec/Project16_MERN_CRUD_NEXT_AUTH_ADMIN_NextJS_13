"use client";

import { Box, styled } from "@mui/material";
// LAYOUTS
import { Navbar, Footer } from ".";

//////////////////// EXPORT FUNCTION ////////////////////
export default function AppLayout({ children }) {
  //////////////////// STYLES ////////////////////
  const RootChildren = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 250px",
    minHeight: "95vh",
    padding: "100px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
    },
  }));

  return (
    <div>
      <Navbar />
      <RootChildren>{children}</RootChildren>
      <Footer />
    </div>
  );
}
