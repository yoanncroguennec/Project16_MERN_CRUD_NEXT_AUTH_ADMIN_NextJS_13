"use client";

import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Notfound() {
  //////////////////// STYLES ////////////////////
  const RootNotfound = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    justifyContent: "center",
  }));

  const stylesLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  }

  return (
    <RootNotfound>
      <Typography align='center' variant='h3'>
        Désolé Page non trouvé 🥺
      </Typography>

      <Link href='/' style={stylesLink}>
        <Typography variant='h4'>Retour vers l'accueil</Typography>
      </Link>
    </RootNotfound>
  );
}
