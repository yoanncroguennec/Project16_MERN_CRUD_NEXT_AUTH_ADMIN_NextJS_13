"use client";

import { Box, Typography, styled } from "@mui/material";
// UTILS DATA

//////////////////// EXPORT FUNCTION ////////////////////
export default function Footer() {
  //////////////////// STYLES ////////////////////
  const RootFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "50px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxSocialNetworks = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));

  return (
    <RootFooter>
      <Typography align="center" variant="h6">©2023 Croguennec Yoann. Tous droits réservés..</Typography>
      <BoxSocialNetworks>
        {/* {socialNetworksFooter.map((item, _id) => {
          return <div key={_id}>{item}</div>;
        })} */}
      </BoxSocialNetworks>
    </RootFooter>
  );
}
