import { Typography } from '@mui/material';
import React from 'react'
import styles from "./page.module.css";
import { signIn } from 'next-auth/react';


export default function LoginEmail({ error }) {
  const stylesForm = {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
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
        yoann.croguennec@gmail.com/95449544
      </Typography>
      <form onSubmit={handleSubmit} style={stylesForm}>
        <input
          type='text'
          placeholder='Email'
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && error}
      </form>
    </div>
  );
}
