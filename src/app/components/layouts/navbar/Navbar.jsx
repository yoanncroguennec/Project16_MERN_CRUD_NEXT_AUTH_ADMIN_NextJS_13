"use client";

import { Box, Typography, styled } from "@mui/material";
//@TIPPYJS/REACT
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
// NEXT
import Link from "next/link";
// NEXT-AUTH
import { signOut, useSession } from "next-auth/react";
// DATA
import { linksNavbar } from "@/app/utils/data/DataLinksNavbar";
// ICONS
import { AiOutlineLogout } from "react-icons/ai";
const sizeIcon = 35;
import { DarkModeToggle } from "../../common";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Navbar() {
  //////////////////// STYLES ////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxLinksNavbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));

  const BtnLogout = styled(Box)(({ theme }) => ({
    padding: "5px 15px",
    border: "none",
    background: "#53c28b",
    color: "#FFF",
    cursor: "pointer",
    borderRadius: "25px",
  }));

  const session = useSession();

  return (
    <RootNavbar>
      <Link href='/'>
        <Typography variant='h5'>BLOG</Typography>
      </Link>
      <BoxLinksNavbar>
        <DarkModeToggle />
        {linksNavbar.map((link) => (
          <Link key={link.id} href={link.url}>
            <Typography variant='h5'>{link.title}</Typography>
          </Link>
        ))}
        {session.status === "authenticated" && (
          <Tippy content=<div color='#FFF'>Se déconnecter</div>>
            <BtnLogout onClick={signOut}>
              <AiOutlineLogout size={sizeIcon} />
            </BtnLogout>
          </Tippy>
        )}
      </BoxLinksNavbar>
    </RootNavbar>
  );
}
