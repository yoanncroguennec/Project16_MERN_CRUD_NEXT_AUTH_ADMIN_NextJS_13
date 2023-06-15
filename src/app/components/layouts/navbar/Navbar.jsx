"use client";

import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
//@TIPPYJS/REACT
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; //
// NEXT
import Image from "next/image";
import Link from "next/link";
// NEXT-AUTH
import { signOut, useSession } from "next-auth/react";
// STYLES
import styles from "./page.module.css";
// ICONS
import { AiOutlineLogout } from "react-icons/ai";
const sizeIcon = 35;
//
// import { DarkModeToggle } from "../../common";


//////////////////// EXPORT FUNCTION ////////////////////
export default function Navbar() {
  //////////////////// STYLES ////////////////////
  const logo = {
    height: "110px",
    width: "110px",
  }

  const BtnLogout = styled(Box)(({ theme }) => ({
    padding: "5px 15px",
    border: "none",
    background: "#53c28b",
    color: "#FFF",
    cursor: "pointer",
    borderRadius: "25px",
  }));

  const {
    nav,
    navLogo,
    navLinks,
    showNav,
    hideNav,
    slideInDown1,
    navLink,
    navBurger,
    burgerBar,
  } = styles;

  // Show Links Navbar
  const [showLinks, setShowLinks] = useState(false);

  function handleShowLinks() {
    setShowLinks(!showLinks);
  }

  const session = useSession();
  return (
    <nav className={`${nav} ${showLinks ? `${showNav}` : `${hideNav}`}`}>
      <Link href='/'>
        <Image
          alt=''
          height={80}
          src='/assets/logos/globeTrotter.png'
          style={logo}
          width={80}
        />
      </Link>
      <ul className={navLinks}>
        {/* <DarkModeToggle /> */}
        <Link
          className={(navLink, slideInDown1)}
          href='/'
          onClick={handleShowLinks}
          style={{ textDecoration: "none" }}
        >
          <Typography variant='h5'>Accueil</Typography>
        </Link>
        <Link
          className={navLink}
          href='/pages/categories'
          onClick={handleShowLinks}
          style={{ textDecoration: "none" }}
        >
          <Typography variant='h5'>Catégories</Typography>
        </Link>
        <Link
          href='/pages/blog'
          className={navLink}
          onClick={handleShowLinks}
          style={{ textDecoration: "none" }}
        >
          <Typography variant='h5'>Blog</Typography>
        </Link>
        {session.status === "authenticated" && (
          <>
            <Link
              href='/pages/dashboard'
              className={navLink}
              onClick={handleShowLinks}
              style={{ textDecoration: "none" }}
            >
              <Typography variant='h5'>Tableau de bord</Typography>
            </Link>
            <Tippy content=<div color='#FFF'>Se déconnecter</div>>
              <BtnLogout onClick={signOut}>
                <AiOutlineLogout size={sizeIcon} />
              </BtnLogout>
            </Tippy>
          </>
        )}
        {session.status !== "authenticated" && (
          <Link
            href='/pages/dashboard/login'
            className={navLink}
            onClick={handleShowLinks}
            style={{ textDecoration: "none" }}
          >
            <Typography variant='h5'>Se connecter</Typography>
          </Link>
        )}
      </ul>
      <button className={navBurger} onClick={handleShowLinks}>
        <span className={burgerBar}></span>
      </button>
    </nav>
  );
}
