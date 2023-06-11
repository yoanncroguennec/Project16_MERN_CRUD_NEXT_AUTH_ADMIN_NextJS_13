"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Portfolio() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  //////////////////// STYLES ////////////////////
  const BoxItems = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    gap: "50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const TypoTitleItem = styled(Typography)(({ theme }) => ({
    position: "absolute",
    right: "10px",
    bottom: "10px",
    fontSize: "40px",
    fontWeight: "bold",
    textShadow: "#FF0000 5px 2px",
    "&:hover": {
      color: "#53c28b",
    },
  }));

  return (
    <>
      <Typography align="center" variant={matches ? "h1" : "h3"}>
        Catégories de voyages
      </Typography>
      <Typography
        variant={matches ? "h3" : "h6"}
        style={{ margin: "20px 0px" }}
      >
        Choisir la catégorie
      </Typography>
      <BoxItems>
        <Link href='/pages/categories/Evasion' className={styles.item}>
          <TypoTitleItem>S&apos;évader</TypoTitleItem>
        </Link>
        <Link href='/pages/categories/Villages' className={styles.item}>
          <TypoTitleItem>Villages</TypoTitleItem>
        </Link>
        <Link href='/pages/categories/BonsPlans' className={styles.item}>
          <TypoTitleItem>Bon plans</TypoTitleItem>
        </Link>
      </BoxItems>
    </>
  );
}
