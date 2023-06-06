"use client";

import React from "react";
import { Box, Typography, styled } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Button from "@/app/components/layouts/btn/Button";
// NEXT
import Image from "next/image";
import { notFound } from "next/navigation"
// UTILS DATA
import { dataCategoryPortfolio } from "@/app/utils/data/pages/portfolio/dataCategoryPortfolio";
import Link from "next/link";


const getData = (cat) => {
  const data = dataCategoryPortfolio[cat];

  if (data) {
    return data;
  }

  return notFound();
};

//////////////////// EXPORT FUNCTION ////////////////////
const Category = ({ params }) => {
  //////////////////// STYLES ////////////////////
  const TypoTitleCategoryPage = styled(Typography)(({ theme }) => ({
    color: "#53c28b",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxItem = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "50px",
    marginTop: "50px",
    marginBottom: "100px",
    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
    },
  }));

  const BoxContent = styled(Box)(({ theme }) => ({
    flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: 'center',
  }));

  const BoxImgCategory = styled(Box)(({ theme }) => ({
      flex: 1,
  height: "500px",
  position: "relative",
}));

const stylesImg = {
  objectFit: "cover",
}
  const data = getData(params.category);
  return (
    <div>
      <TypoTitleCategoryPage variant='h3'>
        {params.category}
      </TypoTitleCategoryPage>

      {data.map(({ _id, title, desc, image, btnSeeMore }) => (
        <BoxItem key={_id}>
          <BoxContent>
            {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
            <Typography variant='h4'>{title}</Typography>
            <div
              dangerouslySetInnerHTML={{ __html: desc }}
              style={{ fontSize: "1.3em" }}
            />
            {btnSeeMore === true && (
              <Link href="/pages/ggg/[slug]?slug=1">
{/* 
              <Link
                href={{
                  pathname: "pages/blog/[slug]",
                  query: { slug: "my-post" },
                }}
              > */}
                <Button text='See More' url='#' />
              </Link>
            )}
          </BoxContent>
          <BoxImgCategory>
            <Image alt='' fill={true} src={image} style={stylesImg} />
          </BoxImgCategory>
        </BoxItem>
      ))}
      <ScrollToTop smooth />
    </div>
  );
};

export default Category;
