"use client";

import React from "react";
import {
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
// NEXT
import Image from "next/image";
import Link from "next/link";

//////////////////// EXPORT FUNCTION ////////////////////
export default function PageCategoryVSMobile({ data, params }) {
  //////////////////// STYLES ////////////////////
  const TypoTitleCategoryPage = styled(Typography)(({ theme }) => ({
    color: "#53c28b",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxItem = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "50px",
    marginTop: "20px",
      flexDirection: "column",
  }))

  const stylesDesc = {
    fontSize: "1em",
  };

  return (
    <div>
      <TypoTitleCategoryPage variant='h3'>
        {params.category}
      </TypoTitleCategoryPage>

      {data.map(
        ({ _id, title, desc, image, btnSeeMore, urlDetailsCategory }) => (
          <BoxItem key={_id}>
            {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
            <Image
              alt=''
              height={250}
              src={image}
              width={350}
            />
            <div>
              <Typography variant='h4'>{title}</Typography>
              <div
                dangerouslySetInnerHTML={{ __html: desc }}
                style={stylesDesc}
              />
              {btnSeeMore === true && (
                <Link href={urlDetailsCategory}>
                  <Button variant='contained'>Voir Plus...</Button>
                </Link>
              )}
            </div>
          </BoxItem>
        )
      )}
      <ScrollToTop smooth />
    </div>
  );
}
