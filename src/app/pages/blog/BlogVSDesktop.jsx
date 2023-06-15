"use client";

import TruncateMarkup from "react-truncate-markup";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
import Image from "next/image";

//////////////////// EXPORT FUNCTION ////////////////////
export default function BlogVSDesktop({ data }) {
  //////////////////// STYLES ////////////////////
  const BoxItem = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "50px",
    marginTop: "50px",
    marginBottom: "100px",
    width: "250px",
    "&:nth-child(2n+1)": {
      flexDirection: "row-reverse",
    },
  }));

  const stylesLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  };

  const BoxContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    width: "250px",
  }));

  const BoxImgCategory = styled(Box)(({ theme }) => ({
    flex: 1,
    height: "500px",
    position: "relative",
  }));

  const stylesImg = {
    objectFit: "cover",
  };

  // Truncate
  function toggleTruncate() {}
  const readMoreEllipsis = (
    <span>
      .......
      <span onClick={toggleTruncate}>
        Lire plus.....
      </span>
    </span>
  );

  return (
    <div>
      <Typography align='center' variant='h4'>
        Publications des Utilisateurs
      </Typography>
      {/* <div style={{ width: "250px" }}>
        {data?.map(({ _id, title, desc, content, img }) => (
          <Link href={`/pages/blog/${_id}`} key={_id}>
            <Typography align='center' variant='h4'>
              {title}
            </Typography>
          </Link>
        ))}
      </div> */}
      {data?.map(({ _id, title, desc, content, img }) => (
        <BoxItem key={_id}>
          <BoxImgCategory>
            <Link href={`/pages/blog/${_id}`} style={stylesLink}>
              <Image alt='' fill={true} src={img} style={stylesImg} />
            </Link>
          </BoxImgCategory>
          <BoxContent>
            <Link href={`/pages/blog/${_id}`} style={stylesLink}>
              {/* <Typography>{10 bons plans gratuits à Paris}</Typography> */}
              <Typography
                align='center'
                style={{ width: "250px" }}
                variant='h4'
              >
                {title}
              </Typography>
              <Typography variant='h5'>{desc}</Typography>
              <TruncateMarkup ellipsis={readMoreEllipsis} lines={7}>
                <div style={{ width: "250px" }}>{content}</div>
              </TruncateMarkup>
            </Link>
          </BoxContent>

          <BoxImgCategory>
            <Link href={`/pages/blog/${_id}`} style={stylesLink}>
              <Image alt='' fill={true} src={img} style={stylesImg} />
            </Link>
          </BoxImgCategory>
        </BoxItem>
      ))}
    </div>
  );
}
