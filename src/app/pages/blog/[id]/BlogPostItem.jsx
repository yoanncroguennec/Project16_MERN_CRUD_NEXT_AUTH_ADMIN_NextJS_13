"use client";

import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

//////////////////// EXPORT FUNCTION ////////////////////
export default function BlogPostItem({ data }) {
  const { username, img, title, desc, content } = data;
  //////////////////// STYLES ////////////////////
  const BoxHeadPostItem = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    margin: "130px 0 30px 0", // Top Right Bottom Left
    textAlign: "center",
  }));

  const BoxAuthor = styled(Box)(({ theme }) => ({
    border: "2px solid #FFF",
    borderRadius: "10px",
    padding: "15px",
  }));

  const TypoTitleAuthor = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textDecoration: "underline",
  }));

  const BoxDescAuthor = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
  }));

  const stylesImgProfileAuthor = {
    border: "3px solid #FFF",
    borderRadius: "999px",
    height: "70px",
    margin: "10px",
    width: "70px",
  };

  const stylesImgPostItem = {
    height: "50%",
    width: "50%",
  };

  const TypoDesc = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    margin: "20px 0",
    textDecoration: "underline",
  }));

  return (
    <>
      <BoxHeadPostItem>
        <BoxAuthor>
          <TypoTitleAuthor variant='h5'>Auteur :</TypoTitleAuthor>
          <BoxDescAuthor>
            <Image
              alt=''
              height={70}
              src='/assets/imgs/blog/profile2.jpg'
              style={stylesImgProfileAuthor}
              width={70}
            />
            <Typography variant='h6'>{username}</Typography>
          </BoxDescAuthor>
        </BoxAuthor>
        <Typography variant='h3'>{title}</Typography>
      </BoxHeadPostItem>
      <Image
        alt=''
        height={400}
        src={img}
        style={stylesImgPostItem}
        width={400}
      />
      <TypoDesc variant='h5'>{desc}</TypoDesc>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ fontSize: "1em" }}
      />
    </>
  );
}
