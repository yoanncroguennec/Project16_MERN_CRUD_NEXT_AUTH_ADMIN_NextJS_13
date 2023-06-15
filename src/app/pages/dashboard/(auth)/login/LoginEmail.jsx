import { Typography } from '@mui/material';
import React from 'react'
import { signIn } from 'next-auth/react';


export default function LoginEmail({ error, stylesBtn }) {
  const stylesForm = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // width: "300px",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div>
      <Typography variant='h6'>
        <strong>
          <u>Démo :</u>
        </strong>{" "}
        yoann.croguennec@gmail.com / 95449544
      </Typography>
      <form onSubmit={handleSubmit} style={stylesForm}>
        <input type='text' placeholder='Email' required style={stylesInput} />
        <input
          type='password'
          placeholder='Password'
          required
          style={stylesInput}
        />
        <button style={stylesBtn}>Se Connecter</button>
        {error && error}
      </form>
    </div>
  );
}
