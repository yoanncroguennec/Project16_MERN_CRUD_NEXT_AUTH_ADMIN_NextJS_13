"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// NEXT-AUTH
import { signIn, useSession } from "next-auth/react";

import LoginEmail from "./LoginEmail";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Login() {
  //////////////////// STYLES ////////////////////
  const RootLogin = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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

  const stylesBtn = {
    background: "#53c28b",
    border: "none",
    borderRadius: "5px",
    color: "#eee",
    cursor: "pointer",
    fontWeight: "bold",
    margin: "5px 0",
    padding: "20px",
    width: "300px",
    "&:hover": {
      background: "#49b07d",
    },
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

      <LoginEmail error={error} stylesBtn={stylesBtn} />
      <button
        onClick={() => {
          signIn("google");
        }}
        style={stylesBtn}
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
