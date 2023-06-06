"use client";

import { Box, Typography, styled } from "@mui/material";
// UTILS DATA
import { socialNetworksFooter } from "@/app/utils/data/DataSocialNetworksFooter";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Footer() {
  //////////////////// STYLES ////////////////////
  const RootFooter = styled(Box)(({ theme }) => ({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxSocialNetworks = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));

  return (
    <RootFooter>
      <Typography variant="h6">©2023 Croguennec Yoann. Tous droits réservés..</Typography>
      <BoxSocialNetworks>
        {/* {socialNetworksFooter.map((item, _id) => {
          return <div key={_id}>{item}</div>;
        })} */}
      </BoxSocialNetworks>
    </RootFooter>
  );
}
