"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import LoginEmail from "./LoginEmail";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Login() {
  //////////////////// STYLES ////////////////////
  const RootLogin = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const Typo = styled(Typography)(({ theme }) => ({
    marginBottom: "0px",
    color: "#bbb",
  }));

  const TypoLink = styled(Typography)(({ theme }) => ({
    color: "#7d7c7c",
    textDecoration: "underline",
    "&:hover": {
      color: "rgb(61, 61, 61)",
    },
  }));

  TypoLink;
  const stylesLink = {
    textDecoration: "underline",
    // color: "#7d7c7c",
    "&:hover": {
      background: "#f00",
    },
    color: "rgb(61, 61, 61)",
  };

  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Chargement...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/pages/dashboard");
  }

  return (
    <RootLogin>
      <Typo variant='h2'>{success ? success : "Bienvenue"}</Typo>
      <Typo variant='h5'>
        Veuillez vous connecter pour voir le tableau de bord.
      </Typo>

      <LoginEmail error={error} />
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Se connecter avec Google
      </button>
      <Typo>- OU -</Typo>
      <Link href='/pages/dashboard/register'>
        <TypoLink>Créer un nouveau compte</TypoLink>
      </Link>
    </RootLogin>
  );
}
