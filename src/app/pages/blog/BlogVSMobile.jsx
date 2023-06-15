"use client";

import TruncateMarkup from "react-truncate-markup";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
import Image from "next/image";

export default function BlogVSMobile({ data }) {
  const RootBlogVSMobile = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }));

  const stylesLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  };

  const TypoTitle = styled(Typography)(({ theme }) => ({
    margin: "20px 0",
    textDecoration: "underline",
  }));

  const BoxImgCategory = styled(Box)(({ theme }) => ({
    flex: 1,
    height: "300px",
    margin: "20px 0",
    position: "relative",
  }));

  const stylesImg = {
    objectFit: "cover",
  };

  const BoxTruncateContent = styled(Box)(({ theme }) => ({
    margin: "0 auto",
    width: "300px",
  }));

  // Truncate
  function toggleTruncate() {}
  const readMoreEllipsis = (
    <span>
      .......
      <span onClick={toggleTruncate}>Lire plus.....</span>
    </span>
  );

  return (
    <RootBlogVSMobile>
      <Typography align='center' variant='h4'>
        Publications des Utilisateurs
      </Typography>
      {data?.map(({ _id, title, desc, content, img }) => (
        <Link href={`/pages/blog/${_id}`} key={_id} style={stylesLink}>
          {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
          <TypoTitle align='center' variant='h4'>
            {title}
          </TypoTitle>
          <Typography variant='h6'>{desc}</Typography>
          <BoxImgCategory>
            <Image alt='' fill={true} src={img} style={stylesImg} />
          </BoxImgCategory>
          <TruncateMarkup ellipsis={readMoreEllipsis} lines={7}>
            <BoxTruncateContent>{content}</BoxTruncateContent>
          </TruncateMarkup>
        </Link>
      ))}
    </RootBlogVSMobile>
  );
}
