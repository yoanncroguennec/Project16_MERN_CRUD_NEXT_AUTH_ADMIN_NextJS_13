"use client"

import React from "react";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch(
    "https://project16-mern-crud-next-auth-admin-next-js-13.vercel.app/api/posts",
    // "http://localhost:3000/api/posts",
    {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


//////////////////// EXPORT FUNCTION ////////////////////
const Blog = async () => {
  //////////////////// STYLES ////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    gap: "50px",
    marginBottom: "100px",
    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
    },
  }));

  const stylesImgItemsBlog = {
    objectFit: "cover",
  };

  const TypoTitleItemsBlog = styled(Typography)(({ theme }) => ({
    marginBottom: "10px",
  }));

  const TypoDescItemsBlog = styled(Typography)(({ theme }) => ({
    color: "#999",
  }));

  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <RootNavbar key={item.id}>
          <Link href={`/pages/blog/${item._id}`}>
            <div>
              <Image
                src={item.img}
                alt=''
                width={400}
                height={250}
                style={stylesImgItemsBlog}
              />
            </div>
            <div>
              <TypoTitleItemsBlog variant='h3'>{item.title}</TypoTitleItemsBlog>
              <TypoDescItemsBlog variant='h6'>{item.desc}</TypoDescItemsBlog>
            </div>
          </Link>
        </RootNavbar>
      ))}
    </div>
  );
};

export default Blog;
