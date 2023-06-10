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
    minHeight: "90vh",
    paddingTop: "150px",
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <div>
      <Navbar />
      <RootChildren>{children}</RootChildren>
      <Footer />
    </div>
  );
}
