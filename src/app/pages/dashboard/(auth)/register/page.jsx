"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";


//////////////////// EXPORT FUNCTION ////////////////////
export default function Register() {
  //////////////////// STYLES ////////////////////
    const RootRegister = styled(Box)(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      [theme.breakpoints.down("sm")]: {},
    }));

  const stylesForm = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "300px",
  };

  const stylesInput = {
    background: "transparent",
    border: "2px solid #bbb",
    color: "#bbb",
    borderRadius: "5px",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "20px",
  };

    const stylesBtn = {
      background: "#53c28b",
      border: "none",
      borderRadius: "5px",
      color: "#eee",
      cursor: "pointer",
      fontWeight: "bold",
      padding: "20px",
      width: "300px",
      "&:hover": {
        background: "#49b07d",
      },
    };

  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/pages/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <RootRegister>
      <Typography variant='h4'>Créer un compte</Typography>
      <Typography align='center' variant='h6'>
        Veuillez vous inscrire pour voir le tableau de bord.
      </Typography>
      <form onSubmit={handleSubmit} style={stylesForm}>
        <input type='text' placeholder='Prénom' required style={stylesInput} />
        <input type='text' placeholder='Email' required style={stylesInput} />
        <input
          type='password'
          placeholder='Mot de passe'
          required
          style={stylesInput}
        />
        <button style={stylesBtn}>S&apos;inscrire</button>
        {error && "Something went wrong!"}
      </form>
      <span>- OU -</span>
      <Link href='/pages/dashboard/login'>
        Se connecter avec un compte existant
      </Link>
    </RootRegister>
  );
}
